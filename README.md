## Clean Blog Projesi 1. Bölüm - Proje Kurulumu

1. CleanBlog proje klasörünü oluşturalım.
2. Package.json dosyasını oluşturalım.
3. Prettier ayarlarını yapalım.(İsteğe bağlı)
4. Express ve Nodemon modüllerini indirelim.
5. git init ile lokal repomuzu oluşturalım.
6. get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini gönderelim.
7. .gitignore dosyası oluşturalım ve ilk repomuzu gönderelim.

## Clean Blog Projesi 2. Bölüm

1. Public klasörü oluşturup statik dosyalarımızı içerisine yerleştirelim.
2. İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.
3. EJS modülünü indirelim.
4. Uygulamamızda EJS modülünü kullanacağımızı belirtelim.
5. Views klasörü oluşturalım ve tüm .html dosyalarımız views klasörü içerisinde .ejs dosyalarına çevirelim.
6. Partials klasör yapısını oluşturalım.
7. İlgili yönlendirmeleri ve \_navigation.ejs klasöründeki link düzenlemelerini yapalım.

## Clean Blog Projesi 3. Bölüm

1. cleanblog-test-db adında bir veri tabanı için mongoose ile gerekli bağlantı bilgilerini yazalım.
2. "Add New Post" sayfamızdan göndericeğimiz veriler req.body ile yakalayalım, gerekli middleware fonksiyonarını kullanalım.
3. title:String, detail:String, dateCreated:Date(default now özelliklerine sahip Post modelini oluşturalım.
4. Veri tabanımızda 3 adet pos dökümanı oluşturalım.
5. Oluşturduğumuz post dökümanlarını Blog sitemizin anasayfasında gösterelim.

## Clean Blog Projesi 4. Bölüm

1. index.ejs içerisinde /posts/<%= posts[i].\_id %> ile \_id bilgisini gönderelim.
2. app.js içerisinde GET metoduyla "/posts/:id" ile gönderilen "\_id" yi yakalayalım.
3. tekil post bilgilerini post.ejs dosyasına gönderelim.
4. post.ejs içerisine post.title, post.detail ve post.dateCreated bilgilerini gönderelim. (her bir post için ayrı image kullanmayacağız)

## Clean Blog Projesi 5. Bölüm

1. post.ejs template içerisinde UPDATE ve DELETE butonu oluşturalım.
2. Herhangi bir post verisini güncellemek için gerekli çalışmaları yapalım.
3. Herhangi bir post verisini silmek için gerekli çalışmaları yapalım.
4. Kodumuzu MVC yapısına göre tekrar düzenleyelim.

## Clean Blog Projesi 6. Bölüm
1. Uygulamamızı Render ve MongoDB Atlas ücresiz servislerini kullanarak yükleyelim.

