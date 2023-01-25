FROM eclipse-temurin:17-jdk-alpine as build
WORKDIR /workspace/app

COPY . /workspace/app
RUN ./gradlew clean build -x test

FROM eclipse-temurin:17-jdk-alpine
COPY --from=build workspace/app/build/libs/*.jar ./
ENTRYPOINT ["java","-jar","bingo-liz-0.0.1-SNAPSHOT.jar"]