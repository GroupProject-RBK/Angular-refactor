import { Component } from '@angular/core';

@Component({ selector: 'ngbd-carousel', templateUrl: './ngb-carousel-basic.component.html' })
export class NgbdCarouselBasic {
	images = ["https://www.lenovo.com/medias/lenovo-laptop-legion-ideapad-3-gaming-hero.png?context=bWFzdGVyfHJvb3R8MjE5OTA5fGltYWdlL3BuZ3xoYWMvaDVlLzE0MzI1NjEyNTQ0MDMwLnBuZ3xiMTdhY2FiMTg2YmYyZDIzNGZlMDNhNjM5YmEzZWMwZWEzZjVkNWEwODg1MDU3YzczNmZhYWNmNTBjYjM1ODA3"," https://cdn.shopify.com/s/files/1/0228/7629/1136/products/8852T_1_HD_2000x.png?v=1650378140","https://www.evetech.co.za/repository/ProductImages/gaming-laptop-best-deals-banner-v1.png"
,"https://www.pngplay.com/wp-content/uploads/6/Computer-Accessories-PNG-Photos.png","https://www.pngplay.com/wp-content/uploads/6/Computer-Accessories-PNG-Free-File-Download.png","https://www.pngmart.com/files/22/iPhone-14-PNG-Photo.png" ].map((n) => `${n}`);
}
