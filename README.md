# DOLAP.COM PHISHING WEBSITE  
Merhabalar,
Bu proje benim ilk spring/react projem ve herhangi bir kötü amaç barındırmıyor. Kötü amaçlı kullanamayın diye de satın alma ekranını yazmadım.


# Kodları düzgün çalıştırmak için belki sizde yoktur diyebileceklerim;
java tarafında:
1- lombok, getter ve setterları otomatikleştiriyor. intellij ideanın içerisindeki plugin marketten kurabilirsiniz. zaten maven dependencylerinde de ekli.

2- database(postgresql) bağlantısı için application.properties bölümünde bazı ufak ayarlar yapmanız gerekebilir sizde farklıysa.
```
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.hibernate.show-sql=true
spring.datasource.url=jdbc:postgresql://localhost:5432/dolapcomDatabase
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.jpa.properties.javax.persistence.validation.mode = none

```

react tarafinda:
indirir indirmez, ```npm run dev``` yazarak projeyi 1 kere baslatabilir, daha sonrasinda da ```npm start``` yazarak baslatabilirsiniz.
benim indirdigim react paketleri, otomatik olarak size yuklenir mi bilmiyorum ama aklima gelenleri yazayim.

![image](https://github.com/emirhankarakoc/dolapcom/assets/101813995/17a819d0-a111-4d8f-a0ee-ad2219406c27)
```
npm install axios
npm install react-bootstrap
npm install react-rom
npm install react-router-dom
npm install semantic-ui-react
npm install semantic-ui-css
npm install swiper```
swiperi kullanmadim ama projede duruyor.
ve fontawesome. neleri indirdigimi hatirlamiyorum.
