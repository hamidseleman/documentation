## Run locally

The purpose of this section is to provide new users with the basics of Shopizer e-commerce framework in order to get started in their projects. It will walk the reader through the steps of installing and configuring Shopizer as well as running demo application locally.

These instructions are for running legacy Shopizer with JSP frontends as well as Shopizer backend version with Angular admin and React shop front.

### Build Shopizer

![Java Backend](../img/java-small.jpg "Java API AKA backend")

From a terminal or console
  
```sh
cd shopizer
```

**Build using Maven**

```sh
mvnw clean install
```

This command should result in a success message. If you have any errors during this process and require assistance,feel free to use Shopizer forum. See [Shopizer forum](https://groups.google.com/forum/#!forum/shopizer) for asking or searching Shopizer build related questions.

**Start Shopizer**

```sh
cd sm-shop
mvnw spring-boot:run
```

Once terminal or console displays that Shopizer is running and listening on service port and ready to be used.

Open a browser and type url http://localhost:8080

This will open Shopizer demo store. In order to open administration tool type url http://localhost:8080/admin. You can login admin tool with user **admin@shopizer.com** and password **password**

Shopizer API http://localhost:8080/swagger-ui.html

Another alternative to run Shopizer locally is to run the application from latest [Docker image](/#/starting/docker).

---

## See also

* [Beginning with Shopizer](/#/starting/starting)
* [Run from Docker image](/#/starting/docker)