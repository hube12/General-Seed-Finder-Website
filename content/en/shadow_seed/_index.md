---
title: Shadow Seed
menu:
  main:
    weight: 40
resources:
- src: "**.{png,jpg}"
  title: "Image #:counter"
  params:
    byline: "Photo: Riona MacNamara / CC-BY-CA"
---

<link rel="stylesheet" href="./shadow1.css">
{{< blocks/cover class="shadow-cover"  >}}
<h3 class="mb-5">This tool help you to get the shadow seed of you current world seed (also know as the seed with exactly the same biomes).</h3>
<div class="mx-auto">
<div class="input-group mb-3">
    
<input id="seed" type="text" class="form-control " placeholder="Your current seed" aria-label="Get your shadow seed" aria-describedby="basic-addon2">
<div class="input-group-append">
<button id="getIt" class="btn btn-primary" type="button" onclick="shadow()">Get your shadow</button>
</div>
</div> 
<div id="warning" class="warning mb-3 mx-auto "></div>
<div class="mb-3 mx-auto display-result">   
<div onClick="selectText(this);" onselect="selectText(this);" class="vw-50 result-text" id="result" style=""></div>
<button id="button_clipboard" class="btn btn-primary" type="button" onclick="copy(this,'result');" style="display: none">Copy to clipboard</button>

</div> 

</div>

{{< /blocks/cover >}}

<script src="https://cdnjs.cloudflare.com/ajax/libs/bignumber.js/9.0.0/bignumber.min.js" integrity="sha512-vg7OeB3i21ZSV8k2kyAXnbFL24Rwoz+nRC6xVAddaoEQIIboCtONdpuQQ+tl56RBDEf8fT0DtcVQeip2asslmg==" crossorigin="anonymous"></script>
<script src="./shadow1.js"></script>

    
