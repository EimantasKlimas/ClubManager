name := """scala-play-react-seed"""

version := "1.0-SNAPSHOT"
val AkkaVersion = "2.6.8"
val AkkaHttpVersion = "10.2.2"

lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    version := "2.8.0",
    scalaVersion := "2.13.1",
    libraryDependencies ++= Seq(
      ws,
      guice,
      jdbc,
      evolutions,
      "com.h2database" % "h2" % "1.4.199",
      "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test,
      "com.typesafe.akka" %% "akka-stream" % AkkaVersion,
      "com.typesafe.akka" %% "akka-actor"  % AkkaVersion,
      "com.typesafe.akka" %% "akka-stream" % AkkaVersion,
      "com.typesafe.akka" %% "akka-slf4j"  % AkkaVersion,
      "com.typesafe.akka" %% "akka-http" % AkkaHttpVersion,
      "com.typesafe.akka" %% "akka-http-spray-json" % AkkaHttpVersion
    ),
    scalacOptions ++= List("-encoding", "utf8", "-deprecation", "-feature", "-unchecked", "-Xfatal-warnings"),
    javacOptions ++= List("-Xlint:unchecked", "-Xlint:deprecation", "-Werror")
  )


