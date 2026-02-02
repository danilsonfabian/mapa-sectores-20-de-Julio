var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mapa_1 = new ol.format.GeoJSON();
var features_Mapa_1 = format_Mapa_1.readFeatures(json_Mapa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapa_1.addFeatures(features_Mapa_1);
var lyr_Mapa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapa_1, 
                style: style_Mapa_1,
                popuplayertitle: 'Mapa',
                interactive: true,
                title: '<img src="styles/legend/Mapa_1.png" /> Mapa'
            });
var format_sectorrsector_copiar_2 = new ol.format.GeoJSON();
var features_sectorrsector_copiar_2 = format_sectorrsector_copiar_2.readFeatures(json_sectorrsector_copiar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sectorrsector_copiar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sectorrsector_copiar_2.addFeatures(features_sectorrsector_copiar_2);
var lyr_sectorrsector_copiar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sectorrsector_copiar_2, 
                style: style_sectorrsector_copiar_2,
                popuplayertitle: 'sectorr — sector_copiar',
                interactive: true,
                title: 'sectorr — sector_copiar'
            });
var format_Sector_3 = new ol.format.GeoJSON();
var features_Sector_3 = format_Sector_3.readFeatures(json_Sector_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector_3.addFeatures(features_Sector_3);
var lyr_Sector_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector_3, 
                style: style_Sector_3,
                popuplayertitle: 'Sector',
                interactive: true,
                title: '<img src="styles/legend/Sector_3.png" /> Sector'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Mapa_1.setVisible(true);lyr_sectorrsector_copiar_2.setVisible(true);lyr_Sector_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Mapa_1,lyr_sectorrsector_copiar_2,lyr_Sector_3];
lyr_Mapa_1.set('fieldAliases', {'fid': 'fid', 'Sector 20 de Julio': 'Sector 20 de Julio', });
lyr_sectorrsector_copiar_2.set('fieldAliases', {'fid': 'fid', 'Sector 20 de Julio': 'Sector 20 de Julio', });
lyr_Sector_3.set('fieldAliases', {'fid': 'fid', 'Sector 20 de Julio': 'Sector 20 de Julio', });
lyr_Mapa_1.set('fieldImages', {'fid': 'Range', 'Sector 20 de Julio': 'TextEdit', });
lyr_sectorrsector_copiar_2.set('fieldImages', {'fid': 'TextEdit', 'Sector 20 de Julio': 'TextEdit', });
lyr_Sector_3.set('fieldImages', {'fid': 'TextEdit', 'Sector 20 de Julio': 'TextEdit', });
lyr_Mapa_1.set('fieldLabels', {'fid': 'no label', 'Sector 20 de Julio': 'no label', });
lyr_sectorrsector_copiar_2.set('fieldLabels', {'fid': 'no label', 'Sector 20 de Julio': 'no label', });
lyr_Sector_3.set('fieldLabels', {'fid': 'no label', 'Sector 20 de Julio': 'no label', });
lyr_Sector_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});