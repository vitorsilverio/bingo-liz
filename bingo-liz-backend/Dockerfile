FROM arm64v8/gradle:jdk17 as build
WORKDIR /workspace/app

COPY . /workspace/app
RUN gradle clean build -x test

FROM arm64v8/openjdk:17-jdk-slim-bullseye
COPY --from=build workspace/app/build/libs/*.jar ./
ENTRYPOINT ["java","-jar","bingo-liz-0.0.1-SNAPSHOT.jar"]
