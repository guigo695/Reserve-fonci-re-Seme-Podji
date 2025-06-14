var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 0.778000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Arrondissement_1 = new ol.format.GeoJSON();
var features_Arrondissement_1 = format_Arrondissement_1.readFeatures(json_Arrondissement_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arrondissement_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrondissement_1.addFeatures(features_Arrondissement_1);
var lyr_Arrondissement_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arrondissement_1, 
                style: style_Arrondissement_1,
                popuplayertitle: 'Arrondissement',
                interactive: false,
                title: '<img src="styles/legend/Arrondissement_1.png" /> Arrondissement'
            });
var format_reserve_seme_2 = new ol.format.GeoJSON();
var features_reserve_seme_2 = format_reserve_seme_2.readFeatures(json_reserve_seme_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reserve_seme_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reserve_seme_2.addFeatures(features_reserve_seme_2);
var lyr_reserve_seme_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reserve_seme_2, 
                style: style_reserve_seme_2,
                popuplayertitle: 'reserve_seme',
                interactive: true,
                title: '<img src="styles/legend/reserve_seme_2.png" /> reserve_seme'
            });
var format_domainerecasser_3 = new ol.format.GeoJSON();
var features_domainerecasser_3 = format_domainerecasser_3.readFeatures(json_domainerecasser_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_domainerecasser_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_domainerecasser_3.addFeatures(features_domainerecasser_3);
var lyr_domainerecasser_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_domainerecasser_3, 
                style: style_domainerecasser_3,
                popuplayertitle: 'domaine recasser',
                interactive: true,
                title: '<img src="styles/legend/domainerecasser_3.png" /> domaine recasser'
            });
var format_carrieres_4 = new ol.format.GeoJSON();
var features_carrieres_4 = format_carrieres_4.readFeatures(json_carrieres_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carrieres_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carrieres_4.addFeatures(features_carrieres_4);
var lyr_carrieres_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_carrieres_4, 
                style: style_carrieres_4,
                popuplayertitle: 'carrieres',
                interactive: true,
                title: '<img src="styles/legend/carrieres_4.png" /> carrieres'
            });
var format_localit_5 = new ol.format.GeoJSON();
var features_localit_5 = format_localit_5.readFeatures(json_localit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localit_5.addFeatures(features_localit_5);
var lyr_localit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localit_5, 
                style: style_localit_5,
                popuplayertitle: 'localité',
                interactive: true,
                title: '<img src="styles/legend/localit_5.png" /> localité'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_Arrondissement_1.setVisible(true);lyr_reserve_seme_2.setVisible(true);lyr_domainerecasser_3.setVisible(true);lyr_carrieres_4.setVisible(true);lyr_localit_5.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_Arrondissement_1,lyr_reserve_seme_2,lyr_domainerecasser_3,lyr_carrieres_4,lyr_localit_5];
lyr_Arrondissement_1.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'bn_niv1': 'bn_niv1', 'bn_niv2': 'bn_niv2', 'bn_niv3': 'bn_niv3', 'bn_niv4': 'bn_niv4', 'pop_79': 'pop_79', 'pop_92': 'pop_92', 'pop_02': 'pop_02', 'arrond': 'arrond', 'sup': 'sup', });
lyr_reserve_seme_2.set('fieldAliases', {'arrondisse': 'arrondisse', 'quartier_v': 'quartier_v', 'type_de_pa': 'type_de_pa', 'nature_de_': 'nature_de_', 'proprietai': 'proprietai', 'commentair': 'commentair', 'etat du do': 'etat du do', 'superficie': 'superficie', });
lyr_domainerecasser_3.set('fieldAliases', {'fid': 'fid', 'code_insae': 'code_insae', 'type_parce': 'type_parce', 'lotissemen': 'lotissemen', 'surf_sig': 'surf_sig', 'user_creat': 'user_creat', 'date_creat': 'date_creat', 'user_modif': 'user_modif', 'date_modif': 'date_modif', });
lyr_carrieres_4.set('fieldAliases', {'Type': 'Type', });
lyr_localit_5.set('fieldAliases', {'NOM': 'NOM', });
lyr_Arrondissement_1.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'bn_niv1': 'TextEdit', 'bn_niv2': 'TextEdit', 'bn_niv3': 'TextEdit', 'bn_niv4': 'TextEdit', 'pop_79': 'TextEdit', 'pop_92': 'TextEdit', 'pop_02': 'TextEdit', 'arrond': 'TextEdit', 'sup': 'TextEdit', });
lyr_reserve_seme_2.set('fieldImages', {'arrondisse': 'TextEdit', 'quartier_v': 'TextEdit', 'type_de_pa': 'TextEdit', 'nature_de_': 'TextEdit', 'proprietai': 'TextEdit', 'commentair': 'TextEdit', 'etat du do': 'TextEdit', 'superficie': '', });
lyr_domainerecasser_3.set('fieldImages', {'fid': 'TextEdit', 'code_insae': 'TextEdit', 'type_parce': 'TextEdit', 'lotissemen': 'TextEdit', 'surf_sig': 'TextEdit', 'user_creat': 'TextEdit', 'date_creat': 'TextEdit', 'user_modif': 'TextEdit', 'date_modif': 'TextEdit', });
lyr_carrieres_4.set('fieldImages', {'Type': 'TextEdit', });
lyr_localit_5.set('fieldImages', {'NOM': 'TextEdit', });
lyr_Arrondissement_1.set('fieldLabels', {'gid': 'header label - always visible', 'id': 'header label - always visible', 'bn_niv1': 'header label - always visible', 'bn_niv2': 'header label - always visible', 'bn_niv3': 'header label - always visible', 'bn_niv4': 'header label - always visible', 'pop_79': 'header label - always visible', 'pop_92': 'header label - always visible', 'pop_02': 'header label - always visible', 'arrond': 'header label - always visible', 'sup': 'header label - always visible', });
lyr_reserve_seme_2.set('fieldLabels', {'arrondisse': 'header label - always visible', 'quartier_v': 'header label - always visible', 'type_de_pa': 'header label - always visible', 'nature_de_': 'header label - always visible', 'proprietai': 'header label - always visible', 'commentair': 'header label - always visible', 'etat du do': 'header label - always visible', 'superficie': 'header label - always visible', });
lyr_domainerecasser_3.set('fieldLabels', {'fid': 'hidden field', 'code_insae': 'header label - always visible', 'type_parce': 'header label - always visible', 'lotissemen': 'header label - always visible', 'surf_sig': 'hidden field', 'user_creat': 'header label - always visible', 'date_creat': 'header label - always visible', 'user_modif': 'header label - always visible', 'date_modif': 'header label - always visible', });
lyr_carrieres_4.set('fieldLabels', {'Type': 'header label - always visible', });
lyr_localit_5.set('fieldLabels', {'NOM': 'header label - always visible', });
lyr_localit_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});