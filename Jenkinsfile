pipeline {
    agent any

    environment {
        BACKEND_IMAGE = 'nextstep-backend-image'
        FRONTEND_IMAGE = 'nextstep-frontend-image'
        DATABASE_URL = credentials('backend-db-url')
        BACKEND_URL = credentials('BACKEND_URL')
        JWT_SECRET = credentials('JWT_SECRET')
        SONAR_TOKEN = credentials('sonar') 
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/MisbahSubhani/NEXTSTEP'
            }
        }

        /* ===== BACKEND ===== */
        stage('Build Backend Docker Image') {
            steps {
                dir('Backend') {
                    script {
                        sh "docker build -f Dockerfile -t $BACKEND_IMAGE ."
                    }
                }
            }
        }

        stage('Stop & Remove Backend Container') {
            steps {
                sh '''
                docker stop nextstep-backend-container || true
                docker rm nextstep-backend-container || true
                '''
            }
        }

        stage('Run Backend Container') {
            steps {
                sh '''
                docker run -d --name nextstep-backend-container \
                -p 3001:3001 \
                -e DATABASE_URL=$DATABASE_URL \
                -e JWT_SECRET=$JWT_SECRET \
                nextstep-backend-image
                '''
            }
        }

        /* ===== FRONTEND ===== */
        stage('Build Frontend Docker Image') {
            steps {
                dir('Frontend') {
                    script {
                        // Inject BACKEND_URL dynamically into .env file
                        sh """
                        echo "VITE_SERVER_URL=$BACKEND_URL" > .env
                        docker build -f Dockerfile -t $FRONTEND_IMAGE .
                        """
                    }
                }
            }
        }

        stage('Stop & Remove Frontend Container') {
            steps {
                sh '''
                docker stop nextstep-frontend-container || true
                docker rm nextstep-frontend-container || true
                '''
            }
        }

        stage('Run Frontend Container') {
            steps {
                sh '''
                docker run -d --name nextstep-frontend-container \
                -p 3000:80 \
                nextstep-frontend-image
                '''
            }
        }

        /* ===== SONARQUBE ANALYSIS ===== */
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonar-nextstep') {
                    script {
                        def scannerHome = tool 'sonar'
                        sh """
                            ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=nextstep \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://3.218.252.251:9000 \
                            -Dsonar.login=$SONAR_TOKEN
                        """
                    }
                }
            }
        }

    }
}
