pipeline {
    agent any

    environment {
        // Frontend and Backend Image Names
        FRONTEND_IMAGE = 'nextstep-frontend:latest'
        BACKEND_IMAGE  = 'nextstep-backend:latest'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/MisbahSubhani/NEXTSTEP', branch: 'main'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                dir('Frontend') {
                    sh 'docker build -t $FRONTEND_IMAGE .'
                }
            }
        }

        stage('Run Frontend Docker Container') {
            steps {
                sh '''
                docker rm -f nextstep-frontend-container || true
                docker run -d -p 3000:80 --name nextstep-frontend-container $FRONTEND_IMAGE
                '''
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                dir('Backend') {
                    sh 'docker build -t $BACKEND_IMAGE .'
                }
            }
        }

        stage('Run Backend Docker Container') {
            steps {
                withCredentials([
                    string(credentialsId: 'backend-db-url', variable: 'DB_URL'),
                    string(credentialsId: 'backend-jwt-secret', variable: 'JWT_SECRET')
                ]) {
                    sh '''
                    docker rm -f nextstep-backend-container || true
                    echo "Database URL: $DB_URL"
                    echo "JWT Secret: $JWT_SECRET"
                    
                    docker run -d -p 3001:3001 \
                      --name nextstep-backend-container \
                      -e DATABASE_URL=$DB_URL \
                      -e JWT_SECRET=$JWT_SECRET \
                      $BACKEND_IMAGE
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
