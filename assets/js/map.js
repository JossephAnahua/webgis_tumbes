var map = L.map('map', {
    center: [-3.570170840188675, -80.45932528525613],
    zoom: 18,
    minZoom: 5,
    maxZoom: 30,
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleHybrid.addTo(map);

var wmsUrl =
'https://www.idep.gob.pe/geoportal/services/IMAGENES/ORTOFOTO_TUMBES/MapServer/WMSServer';
var ortotumbes =
L.tileLayer.wms(wmsUrl, {
layers: '0', //Imagen Satelital de Tumbes
format: 'image/png',
transparent: true
});
ortotumbes.addTo(map);

var departamento_tumbes = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_tumbes/wms", {
	   layers: "webgis_tumbes:departamento_tumbes", //gisweb:ciudad de tumbes
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
departamento_tumbes.addTo(map);

var tumbes = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_tumbes/wms", {
	   layers: "webgis_tumbes:tumbes", //gisweb:ciudad de tumbes
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
tumbes.addTo(map);


var centro_de_compras = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_tumbes/wms", {
	   layers: "webgis_tumbes:centro_de_compras", //gisweb:centro de compras de tumbes
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
centro_de_compras.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_tumbes/wms", {
	   layers: "webgis_tumbes:colegios", //gisweb:colegios de tumbes
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
colegios.addTo(map);

var comisarias = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_tumbes/wms", {
	   layers: "webgis_tumbes:comisarias", //gisweb:comisarias de tumbes
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
comisarias.addTo(map);

var estacion_de_bus = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_tumbes/wms", {
	   layers: "webgis_tumbes:estacion_de_bus", //gisweb:estacion de bus en tumbes
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
estacion_de_bus.addTo(map);

var hospital = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_tumbes/wms", {
	   layers: "webgis_tumbes:hospital", //gisweb:hospital en tumbes
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hospital.addTo(map);

var hotel = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_tumbes/wms", {
	   layers: "webgis_tumbes:hotel", //gisweb:hotel en tumbes
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hotel.addTo(map);

var lugar_de_oracion = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_tumbes/wms", {
	   layers: "webgis_tumbes:lugar_de_oracion", //gisweb:lugar de oracion en tumbes
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
lugar_de_oracion.addTo(map);

var restaurante = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_tumbes/wms", {
	   layers: "webgis_tumbes:restaurante", //gisweb:restaurante en tumbes
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
restaurante.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "Ortomosaico de Tumbes": ortotumbes,
    "Hibrido": googleHybrid,
    "Satelital": googleSat
};

var overlayMaps = {
    "Limites distritales": tumbes,
    "Limite departamental": departamento_tumbes,
    "Centro de compras": centro_de_compras,
    "Centros educativos": colegios,
    "Comisarias": comisarias,
    "Estaciones de buses": estacion_de_bus,
    "Hospitales": hospital,
    "Hoteles y Hospedajes": hotel,
    "Centros de oracion y culto": lugar_de_oracion,
    "Restaurantes": restaurante
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
    imperial: false
  }).addTo(map);
  