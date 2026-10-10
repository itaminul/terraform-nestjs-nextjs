pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = "your-dockerhub-username"
        IMAGE_NAME      = "nestjs-api"
        IMAGE_TAG       = "${BUILD_NUMBER}" // Automatically increments per build
    }

    stages {
        stage('Fetch Code') {
            steps {
                checkout scm
            }
        }

        stage('Test & Build') {
            steps {
                // Installs dependencies and runs your NestJS tests
                sh 'npm install'
                sh 'npm run test'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Builds the docker image using the Dockerfile in your backend folder
                sh "docker build -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} ./backend"
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Logs into Docker and pushes the image
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "docker login -u ${USER} -p ${PASS}"
                    sh "docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                // Applies your updated YAML files directly into your K8s namespace
                withKubeConfig([credentialsId: 'k8s-cluster-creds']) {
                    sh "kubectl apply -f ./backend/k8s/deployment.yaml"
                    sh "kubectl apply -f ./backend/k8s/service.yaml"
                    sh "kubectl apply -f ./backend/k8s/ingress.yaml"
                }
            }
        }
    }
}
