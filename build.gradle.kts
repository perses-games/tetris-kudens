plugins {
    kotlin("multiplatform") version "1.5.31"
}

group = "games.perses"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    maven {
        url = uri("https://nexus.astraeus.nl/nexus/content/groups/public")
    }
}

kotlin {
    js(IR) {
        binaries.executable()
        browser {

        }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                api("games.perses:kudens:1.2.1")
            }
        }
        val commonTest by getting
        val jsMain by getting
        val jsTest by getting
    }
}
