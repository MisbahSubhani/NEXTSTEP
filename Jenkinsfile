pipeline {
    agent any

    environment {
        BACKEND_CONTAINER = 'nextstep-backend-container'
        BACKEND_IMAGE = 'nextstep-backend-image'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/MisbahSubhani/NEXTSTEP'
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('Backend') {
                    script {
                        sh 'docker build -t $BACKEND_IMAGE .'
                    }
                }
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                script {
                    sh '''
                    docker stop $BACKEND_CONTAINER || true
                    docker rm $BACKEND_CONTAINER || true
                    '''
                }
            }
        }

        stage('Run New Container') {
            steps {
                script {
                    sh '''
                    docker run -d --name $BACKEND_CONTAINER -p 3001:3001 \
                    -e DATABASE_URL=${DATABASE_URL} \
                    -e JWT_SECRET=${JWT_SECRET} \
                    $BACKEND_IMAGE
                    '''
                }
            }
        }
    }
}
