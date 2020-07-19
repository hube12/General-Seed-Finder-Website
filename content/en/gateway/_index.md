---
title: Gateway locations
menu:
  main:
    weight: 40
---

{{< blocks/cover class="shadow-cover"  >}}
<input id="seed" type="text" class="form-control " placeholder="Your current seed" aria-label="Get your shadow seed" aria-describedby="basic-addon2">
<button id="getIt" class="btn btn-primary" type="button" onclick="makeRequest()">Get the gateway tp commands</button>
<div id="results" style="white-space: pre-line;"></div>
<script src="./api.js"></script>
{{< /blocks/cover >}}

    
