pipeline {
    agent {
        docker { image 'node:18-alpine' }
    }
    stages {
         stage('Build docker and run container') {

            steps {
                echo 'Building and cleaning'
                sh 'docker build -t demo-ci-cd .'
                sh 'docker container stop demo-ci-cd || echo "this container does not exist" '
                sh 'docker container run --name khaitq/demo-ci-cd --rm -d -p 3000:8081 demo-ci-cd'
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
