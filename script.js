document.addEventListener('DOMContentLoaded', function() {
    // Datos del catálogo (simulados)
    const categorias = [
        {
            nombre: "Plataformas de Streaming",
            productos: [
                { id: 1, nombre: "Netflix 1 Mes", precio: 4200, imagen: "images/Netflix.jpg" },
                { id: 2, nombre: "Netflix 2 Meses", precio: 6200, imagen: "images/Netflix.jpg" },
                { id: 5, nombre: "Youtube Premium 1 Mes", precio: 1800, imagen: "images/youtube premium.png" },
                { id: 6, nombre: "Prime Video 1 Mes", precio: 1800, imagen: "images/prime video.png" },
                { id: 7, nombre: "Prime Video 2 Meses", precio: 2800, imagen: "images/prime video.png" },
                { id: 8, nombre: "Crunchyroll 1 Mes", precio: 1800, imagen: "images/crunchyroll.png" },
                { id: 9, nombre: "Crunchyroll 2 Meses", precio: 2800, imagen: "images/crunchyroll.png" },
                { id: 10, nombre: "Vix 1 Mes", precio: 1800, imagen: "images/VixPremium.jpg" },
                { id: 51, nombre: "Vix 2 Meses", precio: 2800, imagen: "images/VixPremium.jpg" },
                { id: 52, nombre: "Paramount 1 Mes", precio: 1800, imagen: "images/paramount plus.png" },
                { id: 53, nombre: "Paramount 2 Meses", precio: 2800, imagen: "images/paramount plus.png" },
                { id: 54, nombre: "IPTV 1 Mes", precio: 1800, imagen: "images/iptv.png" },
                { id: 55, nombre: "IPTV 2 Meses", precio: 2800, imagen: "images/iptv.png" },
                { id: 56, nombre: "Disney Premium 1 Mes", precio: 3000, imagen: "images/disney.jpeg" },
                { id: 57, nombre: "Disney Premium 2 Meses", precio: 5000, imagen: "images/disney.jpeg" },
                { id: 58, nombre: "Disney Premium 3 Meses", precio: 7000, imagen: "images/disney.jpeg" },
                { id: 59, nombre: "Canva 1 Mes", precio: 2000, imagen: "images/canva.png" },
                { id: 60, nombre: "Canva 2 Meses", precio: 3600, imagen: "images/canva.png" },
                { id: 61, nombre: "Spotify 1 Mes", precio: 2000, imagen: "images/Spotify.png" },
                { id: 62, nombre: "Spotify 2 Meses", precio: 3600, imagen: "images/Spotify.png" },
                { id: 63, nombre: "Zapping 1 Mes (+TNT Sports)", precio: 4800, imagen: "images/zapping.png" },
                { id: 64, nombre: "Zapping 2 Meses (+TNT Sports)", precio: 6500, imagen: "images/zapping.png" },
                { id: 65, nombre: "Movistar TV 1 Mes (+TNT Sports)", precio: 4800, imagen: "images/movistar.png" },
                { id: 66, nombre: "Movistar TV 2 Meses (+TNT Sports)", precio: 6500, imagen: "images/movistar.png" },
                { id: 3, nombre: "HBO Max 1 Mes", precio: 1800, imagen: "images/HBO MAX.jpg" },
                { id: 4, nombre: "HBO Max 2 Meses", precio: 2800, imagen: "images/HBO MAX.jpg" },
                { id: 84, nombre: "HBO Max 1 Mes (+TNT Sports)", precio: 5000, imagen: "images/HBO MAX.jpg" },
                { id: 85, nombre: "HBO Max 2 Meses (+TNT Sports)", precio: 7000, imagen: "images/HBO MAX.jpg" },
                { id: 91, nombre: "Chat GPT Plus 1 Mes", precio: 8000, imagen: "images/0gpt.jpeg" },
                { id: 92, nombre: "Gemini IA 15 Meses", precio: 12000, imagen: "images/0gemini.jpg" },
                { id: 255, nombre: "Viki Rakuten 1 Mes", precio: 3000, imagen: "images4/viki.png" },
                { id: 256, nombre: "Viki Rakuten 2 Meses", precio: 5000, imagen: "images4/viki.png" }
            ]
        },
        {
            nombre: "Juegos PS5",
            productos: [
                { id: 11, nombre: "FC24", precio: 9990, imagen: "images/ps5 fc24.jpg" },
                { id: 12, nombre: "Ratchet % Clank Rift Apart", precio: 11000, imagen: "images/ratchet & clank.jpg" },
                { id: 86, nombre: "Returnal", precio: 12000, imagen: "images/returnal.jpg" },
                { id: 87, nombre: "Resident Evil Village", precio: 9500, imagen: "images/0RE village.jpg" },
                { id: 88, nombre: "Resident Evil Biohazard", precio: 8500, imagen: "images/0RE biohazard.jpg" },
                { id: 89, nombre: "The Devil In Me", precio: 12000, imagen: "images/0thedevilme.png" },
                { id: 90, nombre: "Hunting Simulator 2", precio: 7000, imagen: "images/0hunting simulator.jpg" },
                { id: 110, nombre: "Super pack Resident Evil", precio: 13000, imagen: "images/00superpackresident.jpeg" },
                { id: 111, nombre: "Silent hill 2 + Dragon ball Xenoverse 2", precio: 23000, imagen: "images/00superpacksh2ydbx2.jpeg" },
                { id: 112, nombre: "Triple pack imperdible", precio: 15000, imagen: "images/00triplepackimperdible.jpeg" },
                { id: 119, nombre: "Red Read Redemption 2", precio: 16000, imagen: "images/reddead2ps5.png"},
                { id: 120, nombre: "Amnesia The Bunker", precio: 13000, imagen: "images/amnesiabunkerps5.png" },
                { id: 121, nombre: "The Callisto Protocol", precio: 9500, imagen: "images/thecallistops5.jpg" },
                { id: 122, nombre: "Far Cry 6", precio: 9500, imagen: "images/farcryps5.jpg"},
                { id: 125, nombre: "God of War Ragnarok", precio: 17000, imagen: "images/gowragnarokps5.jpg" },
                { id: 126, nombre: "Tomb Raider Definitive Survivor Trilogy", precio: 9500, imagen: "images/tombraiderps5.png"},
                { id: 124, nombre: "Call of Duty Modern Warfare 2 ", precio: 8500, imagen: "images/4.jpeg"},
                { id: 131, nombre: "Darksiders Warmastered Edition", precio: 7500, imagen: "images/6.jpeg"},
                { id: 132, nombre: "Darksiders 2 Deathinitive Edition", precio: 7500, imagen: "images/5.jpeg"},
                { id: 133, nombre: "Darksiders 3 Deluxe Edition", precio: 7500, imagen: "images/8.jpeg"},
                { id: 134, nombre: "Outlast", precio: 8500, imagen: "images/7.jpeg"},
                { id: 149, nombre: "Monopoly Family", precio: 8000, imagen: "images/monopolyps5.jpg"},
                { id: 150, nombre: "The Escapists 2", precio: 8000, imagen: "images/escapist2ps5.jpg"},
                { id: 151, nombre: "Crash Bandicoot N Sane Trilogy", precio: 12000, imagen: "images/crashps5.png"},
                { id: 152, nombre: "Wolfestain The New Order", precio: 7500, imagen: "images/wolfps5.jpg"},
                { id: 153, nombre: "Wolfestain Old Blood", precio: 7500, imagen: "images/wolf2ps5.jpg"},
                { id: 154, nombre: "God Of War Deluxe Edition", precio: 11000, imagen: "images/gowps5.jpg"},
                { id: 172, nombre: "Uncharted 4", precio: 16000, imagen: "images/aau4ps5.jpg" },
                { id: 173, nombre: "Call of Duty Modern Warfare Remastered", precio: 17000, imagen: "images/aacodmwps5.jpeg" },
                { id: 174, nombre: "Spyro Trilogy", precio: 10000, imagen: "images/aastps5.jpg" },
                { id: 175, nombre: "Spiderman Miles Morales", precio: 18000, imagen: "images/aasmmps5.webp" },
                { id: 176, nombre: "Call of Duty Modern Warfare 2 Cross-Gen Bundle", precio: 24000, imagen: "images/aacodmiwps5.jpeg" },
                { id: 224, nombre: "It takes two", precio: 10000, imagen: "images2/b.jfif" },
                { id: 225, nombre: "Hogwarts Legacy", precio: 5500, imagen: "images2/c.jpg" },
                { id: 226, nombre: "Need for Speed", precio: 5500, imagen: "images2/f.jfif" },
                { id: 227, nombre: "Unravel", precio: 3500, imagen: "images2/g.jfif" },
                { id: 228, nombre: "Dragonball Xenoverse", precio: 10000, imagen: "images2/j.jfif" },
                { id: 253, nombre: "Pes 2020 + Actualización", precio: 8990, imagen: "images4/cc.jpeg" },
                { id: 254, nombre: "Pes 2021 + Actualización", precio: 10990, imagen: "images4/bb.jpeg" }
            ]
        },
        {
            nombre: "Juegos PS4",
            productos: [
                { id: 21, nombre: "Alan Wake Remastered", precio: 9990, imagen: "images/alan wake.jpg" },
                { id: 22, nombre: "The Quarry", precio: 9990, imagen: "images/the quarry.jpg" },
                { id: 23, nombre: "The Evil Whitin Digital Bundle", precio: 9990, imagen: "images/the evil within.jpg" },
                { id: 24, nombre: "Assassins Creed Valhalla", precio: 9990, imagen: "images/assassins creed valhalla.jpg" },
                { id: 25, nombre: "Ghost of Tsushima", precio: 9990, imagen: "images/ghost of tsushima.jpg" },
                { id: 26, nombre: "Hot Wheels Unleashed 2 Turbocharged", precio: 9990, imagen: "images/hot wheels.jpg" },
                { id: 27, nombre: "Sherlock Holmes Essential Bundle", precio: 9990, imagen: "images/sherlock holmes.png" },
                { id: 96, nombre: "Resident Evil Village", precio: 9500, imagen: "images/0RE village2.jpg" },
                { id: 97, nombre: "Resident Evil Biohazard", precio: 8500, imagen: "images/0RE biohazard2.jpg" },
                { id: 98, nombre: "Alien Insolation", precio: 8000, imagen: "images/0alien insolation.jpg" },
                { id: 99, nombre: "Life is Strange 2 Complete Edition", precio: 8000, imagen: "images/0lifeisstrange.jpg" },
                { id: 100, nombre: "Resident Evil Code Veronica", precio: 5500, imagen: "images/0RE code veronica.png" },
                { id: 101, nombre: "Lego Marvel Super Heroes", precio: 5000, imagen: "images/0lego marvel.jpg" },
                { id: 102, nombre: "Call of Duty Ghosts", precio: 11000, imagen: "images/0callofduty.jpg" },
                { id: 103, nombre: "Mortal Kombat 11", precio: 6500, imagen: "images/0mortal kombat.png" },
                { id: 104, nombre: "Captain Tsubasa", precio: 9990, imagen: "images/0camptain tsubasa.jpg" },
                { id: 105, nombre: "Greyhill Incident", precio: 9200, imagen: "images/00greyhill.jpeg" },
                { id: 108, nombre: "Green Hell", precio: 8500, imagen: "images/00greenhell.jpeg" },
                { id: 106, nombre: "Triple pack Resident Evil", precio: 12000, imagen: "images/00triplepackresident.jpeg"},
                { id: 107, nombre: "Triple pack Shooters", precio: 16000, imagen: "images/00triplepackshooter.jpeg" },
                { id: 109, nombre: "Super pack Terror", precio: 17000, imagen: "images/00superpackterror.jpeg" },
                { id: 114, nombre: "Super pack Resident Evil PS4", precio: 13000, imagen: "images/00ps4superpackresident.jpeg"},
                { id: 115, nombre: "Red Read Redemption 2", precio: 16000, imagen: "images/reddead2ps4.png"},
                { id: 116, nombre: "Amnesia The Bunker", precio: 13000, imagen: "images/amnesiabunkerps4.png" },
                { id: 117, nombre: "The Callisto Protocol", precio: 9500, imagen: "images/thecallistops4.png" },
                { id: 118, nombre: "Far Cry 6", precio: 9500, imagen: "images/farcryps4.jpg"},
                { id: 123, nombre: "God of War Ragnarok", precio: 17000, imagen: "images/gowragnarokps4.jpg" },
                { id: 124, nombre: "Tomb Raider Definitive Survivor Trilogy", precio: 9500, imagen: "images/tombraiderps4.jpg"},
                { id: 127, nombre: "Call of Duty Modern Warfare 2 remastered", precio: 8500, imagen: "images/0.jpeg"},
                { id: 128, nombre: "Darksiders Warmastered Edition", precio: 7500, imagen: "images/1.jpeg"},
                { id: 129, nombre: "Darksiders 2 Deathinitive Edition", precio: 7500, imagen: "images/2.jpeg"},
                { id: 130, nombre: "Darksiders 3 Deluxe Edition", precio: 7500, imagen: "images/3.jpeg"},
                { id: 136, nombre: "Remothered", precio: 7000, imagen: "images/9.jpeg"},
                { id: 137, nombre: "Outlast", precio: 8500, imagen: "images/13.jpeg"},
                { id: 138, nombre: "Naruto Ultimate Ninja Storm", precio: 7500, imagen: "images/10.jpeg"},
                { id: 139, nombre: "Naruto Ultimate Ninja Storm 2", precio: 7500, imagen: "images/11.jpeg"},
                { id: 140, nombre: "Naruto Ultimate Ninja Storm 3 Fullburst", precio: 7500, imagen: "images/12.jpeg"},
                { id: 141, nombre: "Monopoly Family", precio: 8000, imagen: "images/monopolyps4.jpg"},
                { id: 142, nombre: "The Escapists 2", precio: 8000, imagen: "images/escapist2ps4.jpeg"},
                { id: 143, nombre: "Crash Bandicoot N Sane Trilogy", precio: 12000, imagen: "images/crashps4.jpg"},
                { id: 144, nombre: "Wolfestain The New Order", precio: 7500, imagen: "images/wolfps4.jpg"},
                { id: 145, nombre: "Wolfestain Old Blood", precio: 7500, imagen: "images/wolf2ps4.jpg"},
                { id: 146, nombre: "God Of War Deluxe Edition", precio: 11000, imagen: "images/gowps4.jpg"},
                { id: 147, nombre: "A Way Out", precio: 6500, imagen: "images/awayoutps4.jpg"},
                { id: 148, nombre: "Watchdogs 2", precio: 7000, imagen: "images/watchdogs2ps4.jpg"},
                { id: 171, nombre: "Nickelodeon Kart 2", precio: 6500, imagen: "images/aank2ps4.jpg" },
                { id: 163, nombre: "Uncharted 4", precio: 16000, imagen: "images/aau4ps4.jpg" },
                { id: 164, nombre: "Call of Duty Modern Warfare Remastered ", precio: 17000, imagen: "images/aacodmwps4.jpeg" },
                { id: 165, nombre: "Spyro Trilogy", precio: 10000, imagen: "images/aastps4.jpg" },
                { id: 166, nombre: "Bioshock 2 Remastered", precio: 6000, imagen: "images/aabrps4.jpeg" },
                { id: 167, nombre: "Spiderman Miles Morales", precio: 18000, imagen: "images/aasmmps4.jpg" },
                { id: 168, nombre: "Call of Duty Modern Warfare 2 Cross-Gen Bundle", precio: 24000, imagen: "images/aacodmiwps4.jpeg" },
                { id: 169, nombre: "Jurassic World Evolution", precio: 8000, imagen: "images/aajwrps4.webp" },
                { id: 170, nombre: "The Evil Within 2", precio: 8000, imagen: "images/aatew2ps4.jpg" },
                { id: 199, nombre: "It takes two", precio: 10000, imagen: "images2/a.jfif" },
                { id: 200, nombre: "Hogwarts Legacy", precio: 5500, imagen: "images2/d.jfif" },
                { id: 201, nombre: "Need for Speed", precio: 5500, imagen: "images2/e.jfif" },
                { id: 202, nombre: "Unravel", precio: 3500, imagen: "images2/h.jfif" },
                { id: 223, nombre: "Dragonball Xenoverse", precio: 10000, imagen: "images2/i.jfif" },
                { id: 251, nombre: "Pes 2020 + Actualización", precio: 8990, imagen: "images4/xx.jpeg" },
                { id: 252, nombre: "Pes 2021 + Actualización", precio: 10990, imagen: "images4/vv.jpeg" }
            ]
        },
        {
            nombre: "Juegos Nintendo Switch",
            productos: [
                { id: 31, nombre: "Snow bros Nick & Tom Special", precio: 12000, imagen: "images/snow bros.jpeg" },
                { id: 32, nombre: "Mario Kart 8 Deluxe", precio: 12000, imagen: "images/mario kart.jpeg" },
                { id: 237, nombre: "FC 26", precio: 15000, imagen: "images4/fc.webp" },
                { id: 238, nombre: "Terraria", precio: 20000, imagen: "images4/terraria.webp" },
                { id: 239, nombre: "Donkey Kong HD", precio: 21000, imagen: "images4/oo.jpg" },
                { id: 240, nombre: "Super Mario Jamboree", precio: 28000, imagen: "images4/pp.png" },
                { id: 241, nombre: "Lego Worlds", precio: 9500, imagen: "images4/aa.webp" },
                { id: 242, nombre: "Ghostbusters", precio: 9500, imagen: "images4/ss.webp" },
                { id: 243, nombre: "Sonic Frontiers", precio: 9500, imagen: "images4/dd.webp" },
                { id: 244, nombre: "Sonic Racing", precio: 9500, imagen: "images4/sonic.webp" },
                { id: 245, nombre: "Pokémon Escudo", precio: 16000, imagen: "images4/gg.webp" },
                { id: 246, nombre: "Captain Tsubasa", precio: 9500, imagen: "images4/hh.webp" },
                { id: 247, nombre: "Dragon Ball The Breakes", precio: 14000, imagen: "images4/jj.webp" },
                { id: 248, nombre: "Naruto Trilogy", precio: 15000, imagen: "images4/kk.jpg" },
                { id: 249, nombre: "Dragon Ball Fighters", precio: 18000, imagen: "images4/ll.jpg" },
                { id: 250, nombre: "Mario Rabbids", precio: 18000, imagen: "images4/mario.webp" }
            ]
        },
                {
            nombre: "Juegos Xbox",
            productos: [
                { id: 81, nombre: "WWE 2K24", precio: 14990, imagen: "images/wwe 2k24.jpg" },
                { id: 83, nombre: "Alan Wake II", precio: 14990, imagen: "images/alan wake II.jpg" },
                { id: 95, nombre: "Resident Evil 4 Remake", precio: 14000, imagen: "images/0RE 4.jpeg" },
                { id: 155, nombre: "Battlefield 4", precio: 4400, imagen: "images/battlefieldxbox.jpg" },
                { id: 156, nombre: "Watchdogs", precio: 4000, imagen: "images/watchdogsxbox.jpg" },
                { id: 157, nombre: "Overcooked Gourmet Edition", precio: 4000, imagen: "images/overcookedxbox.jpg" },
                { id: 158, nombre: "Tormented Souls", precio: 5000, imagen: "images/tormentedxbox.png" },
                { id: 159, nombre: "Ambulance Life", precio: 9000, imagen: "images/ambulancexbox.jpg" },
                { id: 160, nombre: "Rider Republic", precio: 9000, imagen: "images/aarrxbox.jpg" },
                { id: 161, nombre: "Call of Duty Black Ops 3 Zombies Chronicles", precio: 9800, imagen: "images/aacodboxbox.jpeg" },
                { id: 162, nombre: "Cyberpunk 77", precio: 14000, imagen: "images/aac77xbox.webp" },
                { id: 229, nombre: "WWE 2k26", precio: 35000, imagen: "images4/qqq.webp" },
                { id: 230, nombre: "CTR Nitro Fueled", precio: 8000, imagen: "images4/www.webp" },
                { id: 231, nombre: "Call of Duty WWII", precio: 8000, imagen: "images4/11.jpeg" },
                { id: 232, nombre: "Resident Evil Réquiem", precio: 25000, imagen: "images4/rr.jpg" },
                { id: 233, nombre: "Call of Duty Modern Warfare 2", precio: 8000, imagen: "images4/22.jpeg" },
                { id: 234, nombre: "Tony Hawk 1 y 2 Pack", precio: 8500, imagen: "images4/yy.webp" },
                { id: 235, nombre: "Sekiro", precio: 8500, imagen: "images4/uu.jpg" },
                { id: 236, nombre: "Dark Souls", precio: 6800, imagen: "images4/ii.webp" }
            ]
        },
        {
            nombre: "Software para Windows",
            productos: [
                { id: 41, nombre: "Microsoft Office 2024", precio: 7000, imagen: "images/office.png" },
                { id: 42, nombre: "Adobe Photoshop", precio: 5000, imagen: "images/photoshop.png" },
                { id: 43, nombre: "Adobe Illustrator", precio: 5000, imagen: "images/illustrator.png" },
                { id: 44, nombre: "Adobe Premiere", precio: 5000, imagen: "images/premiere.png" },
                { id: 45, nombre: "Adobe After Effects", precio: 5000, imagen: "images/after effects.png" },
                { id: 93, nombre: "Editor de PDF de por vida", precio: 5000, imagen: "images/0pdf.png" },
                { id: 94, nombre: "Avast Premiere Antivirus", precio: 5000, imagen: "images/0avast.png" },
                { id: 177, nombre: "Spotify", precio: 6000, imagen: "images/aaspoty2.png" }
            ]
        },
        {
            nombre: "Productos Varios",
            productos: [
                { id: 179, nombre: "Barra de sonido Bluetooth", precio: 14000, imagen: "images2/5.jpeg" },
                { id: 180, nombre: "Estación de carga mando Ps5", precio: 13000, imagen: "images2/1.jpeg" },
                { id: 181, nombre: "Estación de carga mando Ps4", precio: 13000, imagen: "images2/2.jpeg" },
                { id: 182, nombre: "Audífonos inalámbricos Sony Originales", precio: 13000, imagen: "images2/3.jpeg" },
                { id: 183, nombre: "Audífonos inalámbricos Xiaomi", precio: 10000, imagen: "images2/4.jpeg" },
                { id: 184, nombre: "Billeteras diseños", precio: 10000, imagen: "images2/10.jpeg" },
                { id: 185, nombre: "Mini parlante Lenovo original Bluetooth", precio: 13500, imagen: "images2/6.jpeg" },
                { id: 186, nombre: "Audífonos inalámbricos Lenovo", precio: 14000, imagen: "images2/7.jpeg" },
                { id: 187, nombre: "Mando Ps4", precio: 16000, imagen: "images2/8.jpeg" },
                { id: 188, nombre: "Mando Nintendo Switch", precio: 16000, imagen: "images2/9.jpeg" },
                { id: 189, nombre: "Audífonos inalámbricos Hello Kitty", precio: 13000, imagen: "images2/16.jpeg" },
                { id: 190, nombre: "Mando Celular", precio: 11000, imagen: "images2/11.jpeg" },
                { id: 191, nombre: "Disco duro Gamer 500GB", precio: 30000, imagen: "images2/12.jpeg" },
                { id: 192, nombre: "Figura Dragón Ball", precio: 17000, imagen: "images2/13.jpeg" },
                { id: 193, nombre: "Figura Link", precio: 16000, imagen: "images2/14.jpeg" },
                { id: 194, nombre: "Figura Final Fantasy", precio: 17000, imagen: "images2/5.jpeg" },
                { id: 195, nombre: "Figura Leon Kennedy", precio: 16500, imagen: "images2/20.jpeg" },
                { id: 196, nombre: "Figura Monkey D. Luffy", precio: 14000, imagen: "images2/17.jpeg" },
                { id: 197, nombre: "Figura Hollow Knight", precio: 13000, imagen: "images2/18.jpeg" },
                { id: 198, nombre: "Figura Inuyasha", precio: 18000, imagen: "images2/19.jpeg" }
            ]
        }


    ];
    
    

    // Variables
    let carrito = [];
    const toastAnadido = new bootstrap.Toast(document.getElementById('toast-anadido'));

    // Generar catálogo
    function generarCatalogo() {
        const accordion = document.getElementById('catalogoAccordion');
        
        categorias.forEach((categoria, index) => {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item';
            
            const accordionHeader = document.createElement('h2');
            accordionHeader.className = 'accordion-header';
            accordionHeader.id = `heading${index}`;
            
            const accordionButton = document.createElement('button');
            accordionButton.className = 'accordion-button collapsed';
            accordionButton.type = 'button';
            accordionButton.setAttribute('data-bs-toggle', 'collapse');
            accordionButton.setAttribute('data-bs-target', `#collapse${index}`);
            accordionButton.setAttribute('aria-expanded', 'false');
            accordionButton.setAttribute('aria-controls', `collapse${index}`);
            accordionButton.textContent = categoria.nombre;
            
            accordionHeader.appendChild(accordionButton);
            
            const accordionCollapse = document.createElement('div');
            accordionCollapse.className = 'accordion-collapse collapse';
            accordionCollapse.id = `collapse${index}`;
            accordionCollapse.setAttribute('aria-labelledby', `heading${index}`);
            accordionCollapse.setAttribute('data-bs-parent', '#catalogoAccordion');
            
            const accordionBody = document.createElement('div');
            accordionBody.className = 'accordion-body';
            
            const row = document.createElement('div');
            row.className = 'row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4';
            
            categoria.productos.forEach(producto => {
                const col = document.createElement('div');
                col.className = 'col';
                
                const card = document.createElement('div');
                card.className = 'card h-100 producto-card';
                
                const img = document.createElement('img');
                img.src = producto.imagen;
                img.className = 'card-img-top logos';
                img.alt = producto.nombre;
                
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                
                const title = document.createElement('h5');
                title.className = 'card-title';
                title.textContent = producto.nombre;
                
                const precio = document.createElement('p');
                precio.className = '.precio card-text text-success fw-bold';
                precio.textContent = `$${producto.precio}`;
                
                const cantidadDiv = document.createElement('div');
                cantidadDiv.className = 'mb-3';
                
                const label = document.createElement('label');
                label.className = 'form-label';
                label.textContent = 'Cantidad:';
                label.setAttribute('for', `cantidad-${producto.id}`);
                
                const input = document.createElement('input');
                input.type = 'number';
                input.className = 'form-control cantidad-input';
                input.id = `cantidad-${producto.id}`;
                input.min = '1';
                input.value = '1';
                
                cantidadDiv.appendChild(label);
                cantidadDiv.appendChild(input);
                
                const btnAgregar = document.createElement('button');
                btnAgregar.className = 'btn btn-primary w-100';
                btnAgregar.textContent = 'Agregar al carrito';
                btnAgregar.onclick = () => agregarAlCarrito(producto.id);
                
                cardBody.appendChild(title);
                cardBody.appendChild(precio);
                cardBody.appendChild(cantidadDiv);
                cardBody.appendChild(btnAgregar);
                
                card.appendChild(img);
                card.appendChild(cardBody);
                
                col.appendChild(card);
                row.appendChild(col);
            });
            
            accordionBody.appendChild(row);
            accordionCollapse.appendChild(accordionBody);
            
            accordionItem.appendChild(accordionHeader);
            accordionItem.appendChild(accordionCollapse);
            
            accordion.appendChild(accordionItem);
        });
    }

    // Agregar producto al carrito
    function agregarAlCarrito(idProducto) {
        const producto = categorias.flatMap(c => c.productos).find(p => p.id === idProducto);
        const cantidad = parseInt(document.getElementById(`cantidad-${idProducto}`).value) || 1;
        
        if (!producto) return;
        
        const productoEnCarrito = carrito.find(item => item.id === idProducto);
        
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += cantidad;
        } else {
            carrito.push({
                ...producto,
                cantidad: cantidad
            });
        }
        
        // Mostrar mensaje
        toastAnadido.show();
        
        // Actualizar carrito
        actualizarCarrito();
    }

    // Actualizar vista del carrito
    function actualizarCarrito() {
        const tbody = document.getElementById('items-carrito');
        const totalElement = document.getElementById('total-carrito');
        
        tbody.innerHTML = '';
        
        let total = 0;
        
        carrito.forEach(item => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;
            
            const tr = document.createElement('tr');
            
            const tdProducto = document.createElement('td');
            tdProducto.innerHTML = `${item.nombre}`;
            
            const tdPrecio = document.createElement('td');
            tdPrecio.textContent = `$${item.precio}`;
            
            const tdCantidad = document.createElement('td');
            tdCantidad.textContent = item.cantidad;
            
            const tdSubtotal = document.createElement('td');
            tdSubtotal.textContent = `$${subtotal}`;
            
            const tdAcciones = document.createElement('td');
            const btnEliminar = document.createElement('button');
            btnEliminar.className = 'btn btn-danger btn-sm';
            btnEliminar.innerHTML = '<i class="fas fa-trash"></i>';
            btnEliminar.onclick = () => eliminarDelCarrito(item.id);
            tdAcciones.appendChild(btnEliminar);
            
            tr.appendChild(tdProducto);
            tr.appendChild(tdPrecio);
            tr.appendChild(tdCantidad);
            tr.appendChild(tdSubtotal);
            tr.appendChild(tdAcciones);
            
            tbody.appendChild(tr);
        });
        
        totalElement.textContent = `$${total}`;
    }

    // Eliminar producto del carrito
    function eliminarDelCarrito(idProducto) {
        carrito = carrito.filter(item => item.id !== idProducto);
        actualizarCarrito();
    }

    // Enviar pedido por WhatsApp
    function enviarPedidoWhatsApp() {
        if (carrito.length === 0) {
            alert('El carrito está vacío');
            return;
        }
        
        const numeroWhatsApp = '56940347452'; // Reemplaza con tu número real
        let mensaje = 'Hola, quisiera comprar los siguientes artículos:%0A%0A';
        
        carrito.forEach(item => {
            mensaje += `- ${item.nombre} (Cantidad: ${item.cantidad}, Precio unitario: $${item.precio})%0A`;
        });
        
        const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        mensaje += `%0ATotal: $${total}`;
        
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
        window.open(url, '_blank');
    }

    // Event listeners
    document.getElementById('enviar-whatsapp').addEventListener('click', enviarPedidoWhatsApp);

    // Inicializar catálogo al cargar la página
    generarCatalogo();
});