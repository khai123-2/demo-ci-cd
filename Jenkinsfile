pipeline {
    agent none
    stages {
         stage('Packaging/Pushing imagae') {
            agent { node {label 'linux'}}
            steps {
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {

                    sh 'docker build -t khaitran0910/demo-ci-cd .'
                    sh 'docker push khaitran0910/demo-ci-cd'

                    //clean to save disk
                    sh 'docker image rm khaitran0910/demo-ci-cd || echo "this container does not exist" '
                }   
            }
        }
        stage('Deploy Express App to DEV') {
            agent any
            steps {
                echo 'Deploying and cleaning'
                sh 'docker image pull khaitran0910/demo-ci-cd'
                sh 'docker container stop khaitran_demo-ci-cd || echo "this container does not exist" '
                sh 'echo y | docker container prune '

                sh 'docker container run -d --rm --name khaitran_demo-ci-cd -p 5001:8081  khaitran0910/demo-ci-cd'

            }
        }
    } 
    post {
        // Clean after build
        always {
            cleanWs()
        }
    }
}
