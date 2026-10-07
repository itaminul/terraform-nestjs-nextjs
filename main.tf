terraform {
  required_providers {
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.12.0"
    }
  }
}

# CORRECT WAY: Nest the kubernetes config block inside the helm provider
provider "helm" {
  kubernetes {
    config_path = "/home/aminul/.kube/config"
  }
}

# The helm release resource block should NOT contain config_path parameters
resource "helm_release" "k8s_app" {
  name       = "k8s-app"
  chart      = "./k8s"
  namespace  = "default"
  atomic     = true

  set {
    name  = "ingress.host"
    value = "k8b.local"
  }

  set {
    name  = "services.api.name"
    value = "nestjs-api"
  }
}
