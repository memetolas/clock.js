let visitor = prompt("Hoşgeldiniz ! Size nasıl hitap etmemizi istersiniz ?") //Ekrana yazdırmak için kullanıcıdan aldığımız girdi
let visitorName = document.querySelector("#myName")
visitorName.innerHTML = visitor  // kullanıcıdan aldığımız girdiyi ekrana yazdırdık



function showTime() {

        let now = new Date() // JS'in hazır olarak sunduğu date nesnesinden now adıyla yeni bir obje ürettik 
        let day = now.toLocaleDateString('tr-TR', { weekday: 'long' }) // now objemiz ile hafta günlerini türkçe ve String formatında çektik/ day isimli değişkene atadık. 
        let time = now.toLocaleTimeString('tr-TR')  //oluşturduğumuz now objesi ile daha önceden tanımlanmış yerel saat, dakika ve saniyeti time isimli değişkene atadık 
        let myClock = document.querySelector("#myClock") // DOM ile saati yazdıracağımız div' e ulaştık
        myClock.innerHTML = time + ' ' + day // Değişkenlere atadığımız değerleri innerHTML kullanarak ekrana yazdırdık
        
}

setInterval(showTime, 1000) //saniye artışını anlık göstermesi için kullandığımız fonksiyon