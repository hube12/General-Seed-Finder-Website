---
title: Gateway locations
menu:
  main:
    weight: 40
---
<link rel="stylesheet" href="./api.css?101">
{{< blocks/cover class="shadow-cover"  >}}
<h3 class="mb-5">This tool help you to get the gateway locations for getting the bedrock item.</h3>
<input id="seed" type="text" class="form-control mb-3" placeholder="Your current seed" aria-label="Get your shadow seed" aria-describedby="basic-addon2">
<div class="input-group mb-3" style="display: flex; justify-content: center;">
<button id="getIt" class="btn btn-primary" type="button" onclick="makeRequest()">Get the gateway tp commands</button>
<div class="input-group-append">
<input id="count" type="number" value="6" name="count" min="6" max="40" style="margin-left: 20px">
</div>
</div>
<div id="results" style="white-space: pre-line;"></div>

{{< /blocks/cover >}}

<script src="./api.js?101"></script>

    
