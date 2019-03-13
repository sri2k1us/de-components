#!groovy
milestone 0

timestamps {
  node('docker') {
      slackJobDescription = "job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})"

      dockerCacheVolumes = """-v /tmp:/tmp -v "\$(pwd)/node_modules:/src/de-components/node_modules\""""

      try {
          stage "Prepare"
          checkout scm

          stage "Create Test Image"
          milestone 20

          dockerRepoTest = "test-de-components-${env.BUILD_TAG}"
          dockerTestRunner = "test-${repo}-${env.BUILD_TAG}"

          sh "docker build --pull --rm -t ${dockerRepoBuild} ."

          try {
              stage "Test"
              milestone 30

              sh "docker run ${dockerCacheVolumes} --name ${dockerTestRunner} ${dockerRepoBuild}"
              sh "docker cp ${dockerTestRunner}:/src/de-components/test-report.xml ./test-report.xml"

              junit "test-report.xml"
          } finally {
              sh returnStatus: true, script: "docker kill ${dockerTestRunner}"
              sh returnStatus: true, script: "docker rm ${dockerTestRunner}"

              sh returnStatus: true, script: "docker rmi ${dockerRepoTest}"
          }
      } catch (InterruptedException e) {
          currentBuild.result = "ABORTED"
          slackSend color: 'warning', message: "ABORTED: ${slackJobDescription}"
          throw e
      } catch (e) {
          currentBuild.result = "FAILED"
          sh "echo ${e}"
          slackSend color: 'danger', message: "FAILED: ${slackJobDescription}"
          throw e
      }
  }
}
