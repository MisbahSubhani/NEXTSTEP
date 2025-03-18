pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/YourRepo/NEXTSTEP.git', branch: 'main'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                dir('Frontend') {
                    sh 'docker build -t nextstep-frontend:latest .'
                }
            }
        }

        stage('Run Frontend Docker Container') {
            steps {
                sh 'docker rm -f nextstep-frontend-container || true'
                sh 'docker run -d -p 3000:80 --name nextstep-frontend-container nextstep-frontend:latest'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                dir('Backend') {
                    sh 'docker build -t nextstep-backend:latest .'
                }
            }
        }

        stage('Run Backend Docker Container') {
            steps {
                sh 'docker rm -f nextstep-backend-container || true'
                // Assuming you want to pass DB URL without adding it to Git:
                withCredentials([string(credentialsId: 'backend-db-url', variable: 'DB_URL')]) {
                    sh '''
                    docker run -d -p 5000:5000 --name nextstep-backend-container \
                    -e DATABASE_URL=$DB_URL \
                    nextstep-backend:latest
                    '''
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
