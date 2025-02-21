var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KawasanTransmigrasiPrioritas_2 = new ol.format.GeoJSON();
var features_KawasanTransmigrasiPrioritas_2 = format_KawasanTransmigrasiPrioritas_2.readFeatures(json_KawasanTransmigrasiPrioritas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanTransmigrasiPrioritas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanTransmigrasiPrioritas_2.addFeatures(features_KawasanTransmigrasiPrioritas_2);
var lyr_KawasanTransmigrasiPrioritas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanTransmigrasiPrioritas_2, 
                style: style_KawasanTransmigrasiPrioritas_2,
                popuplayertitle: 'Kawasan Transmigrasi Prioritas',
                interactive: true,
    title: 'Kawasan Transmigrasi Prioritas<br />\
    <img src="styles/legend/KawasanTransmigrasiPrioritas_2_0.png" /> Prioritas Kementerian<br />\
    <img src="styles/legend/KawasanTransmigrasiPrioritas_2_1.png" /> Prioritas Nasional<br />'
        });
var format_KawasanTransmigrasi_3 = new ol.format.GeoJSON();
var features_KawasanTransmigrasi_3 = format_KawasanTransmigrasi_3.readFeatures(json_KawasanTransmigrasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanTransmigrasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanTransmigrasi_3.addFeatures(features_KawasanTransmigrasi_3);
var lyr_KawasanTransmigrasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanTransmigrasi_3, 
                style: style_KawasanTransmigrasi_3,
                popuplayertitle: 'Kawasan Transmigrasi',
                interactive: true,
                title: '<img src="styles/legend/KawasanTransmigrasi_3.png" /> Kawasan Transmigrasi'
            });
var format_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4 = new ol.format.GeoJSON();
var features_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4 = format_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4.readFeatures(json_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4.addFeatures(features_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4);
var lyr_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4, 
                style: style_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4,
                popuplayertitle: 'Sebaran Lembaga Ekonomi Dominan di Kawasan Transmigrasi',
                interactive: false,
    title: 'Sebaran Lembaga Ekonomi Dominan di Kawasan Transmigrasi<br />\
    <img src="styles/legend/SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4_0.png" /> Koperasi<br />\
    <img src="styles/legend/SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4_1.png" /> Bumdes/Bumdesma<br />\
    <img src="styles/legend/SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4_2.png" /> Perusahaan<br />\
    <img src="styles/legend/SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4_3.png" /> Non Badan Hukum (Kelompok)<br />\
    <img src="styles/legend/SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4_4.png" /> Tidak ada data lembaga ekonomi<br />'
        });

lyr_ESRIGraydark_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_KawasanTransmigrasiPrioritas_2.setVisible(true);lyr_KawasanTransmigrasi_3.setVisible(true);lyr_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4.setVisible(false);
var layersList = [lyr_ESRIGraydark_0,lyr_GoogleSatelliteHybrid_1,lyr_KawasanTransmigrasiPrioritas_2,lyr_KawasanTransmigrasi_3,lyr_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4];
lyr_KawasanTransmigrasiPrioritas_2.set('fieldAliases', {'KAWASAN': 'KAWASAN', 'REMARK': 'REMARK', 'LUAS_HA': 'LUAS_HA', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', 'THN_PRODUK': 'THN_PRODUK', 'SIPUKAT': 'SIPUKAT', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'PRIORITAS': 'PRIORITAS', 'NON BADAN HUKUM (KELOMPOK)': 'NON BADAN HUKUM (KELOMPOK)', 'KOPERASI': 'KOPERASI', 'BUMDES/BUMDESMA': 'BUMDES/BUMDESMA', 'PERUSAHAAN': 'PERUSAHAAN', 'BUMD': 'BUMD', 'JUMLAH': 'JUMLAH', 'LEMBAGA DOMINAN': 'LEMBAGA DOMINAN', });
lyr_KawasanTransmigrasi_3.set('fieldAliases', {'KAWASAN': 'KAWASAN', 'REMARK': 'REMARK', 'LUAS_HA': 'LUAS_HA', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', 'THN_PRODUK': 'THN_PRODUK', 'SIPUKAT': 'SIPUKAT', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'PRIORITAS': 'PRIORITAS', 'NON BADAN HUKUM (KELOMPOK)': 'NON BADAN HUKUM (KELOMPOK)', 'KOPERASI': 'KOPERASI', 'BUMDES/BUMDESMA': 'BUMDES/BUMDESMA', 'PERUSAHAAN': 'PERUSAHAAN', 'BUMD': 'BUMD', 'JUMLAH': 'JUMLAH', 'LEMBAGA DOMINAN': 'LEMBAGA DOMINAN', });
lyr_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4.set('fieldAliases', {'KAWASAN': 'KAWASAN', 'REMARK': 'REMARK', 'LUAS_HA': 'LUAS_HA', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', 'THN_PRODUK': 'THN_PRODUK', 'SIPUKAT': 'SIPUKAT', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'PRIORITAS': 'PRIORITAS', 'NON BADAN HUKUM (KELOMPOK)': 'NON BADAN HUKUM (KELOMPOK)', 'KOPERASI': 'KOPERASI', 'BUMDES/BUMDESMA': 'BUMDES/BUMDESMA', 'PERUSAHAAN': 'PERUSAHAAN', 'BUMD': 'BUMD', 'JUMLAH': 'JUMLAH', 'LEMBAGA DOMINAN': 'LEMBAGA DOMINAN', });
lyr_KawasanTransmigrasiPrioritas_2.set('fieldImages', {'KAWASAN': 'TextEdit', 'REMARK': 'TextEdit', 'LUAS_HA': 'TextEdit', 'STATUS': 'TextEdit', 'SUMBER': 'TextEdit', 'THN_PRODUK': 'TextEdit', 'SIPUKAT': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PRIORITAS': 'TextEdit', 'NON BADAN HUKUM (KELOMPOK)': 'Range', 'KOPERASI': 'Range', 'BUMDES/BUMDESMA': 'Range', 'PERUSAHAAN': 'Range', 'BUMD': 'Range', 'JUMLAH': 'Range', 'LEMBAGA DOMINAN': 'TextEdit', });
lyr_KawasanTransmigrasi_3.set('fieldImages', {'KAWASAN': 'TextEdit', 'REMARK': 'TextEdit', 'LUAS_HA': 'TextEdit', 'STATUS': 'TextEdit', 'SUMBER': 'TextEdit', 'THN_PRODUK': 'TextEdit', 'SIPUKAT': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PRIORITAS': 'TextEdit', 'NON BADAN HUKUM (KELOMPOK)': 'Range', 'KOPERASI': 'Range', 'BUMDES/BUMDESMA': 'Range', 'PERUSAHAAN': 'Range', 'BUMD': 'Range', 'JUMLAH': 'Range', 'LEMBAGA DOMINAN': 'TextEdit', });
lyr_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4.set('fieldImages', {'KAWASAN': 'TextEdit', 'REMARK': 'TextEdit', 'LUAS_HA': 'TextEdit', 'STATUS': 'TextEdit', 'SUMBER': 'TextEdit', 'THN_PRODUK': 'TextEdit', 'SIPUKAT': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PRIORITAS': 'TextEdit', 'NON BADAN HUKUM (KELOMPOK)': 'Range', 'KOPERASI': 'Range', 'BUMDES/BUMDESMA': 'Range', 'PERUSAHAAN': 'Range', 'BUMD': 'Range', 'JUMLAH': 'Range', 'LEMBAGA DOMINAN': 'TextEdit', });
lyr_KawasanTransmigrasiPrioritas_2.set('fieldLabels', {'KAWASAN': 'inline label - always visible', 'REMARK': 'hidden field', 'LUAS_HA': 'hidden field', 'STATUS': 'hidden field', 'SUMBER': 'hidden field', 'THN_PRODUK': 'hidden field', 'SIPUKAT': 'hidden field', 'PROVINSI': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'PRIORITAS': 'hidden field', 'NON BADAN HUKUM (KELOMPOK)': 'inline label - visible with data', 'KOPERASI': 'inline label - visible with data', 'BUMDES/BUMDESMA': 'inline label - visible with data', 'PERUSAHAAN': 'inline label - visible with data', 'BUMD': 'inline label - visible with data', 'JUMLAH': 'hidden field', 'LEMBAGA DOMINAN': 'hidden field', });
lyr_KawasanTransmigrasi_3.set('fieldLabels', {'KAWASAN': 'inline label - always visible', 'REMARK': 'hidden field', 'LUAS_HA': 'hidden field', 'STATUS': 'hidden field', 'SUMBER': 'hidden field', 'THN_PRODUK': 'hidden field', 'SIPUKAT': 'hidden field', 'PROVINSI': 'hidden field', 'KABUPATEN': 'hidden field', 'PRIORITAS': 'hidden field', 'NON BADAN HUKUM (KELOMPOK)': 'hidden field', 'KOPERASI': 'hidden field', 'BUMDES/BUMDESMA': 'hidden field', 'PERUSAHAAN': 'hidden field', 'BUMD': 'hidden field', 'JUMLAH': 'hidden field', 'LEMBAGA DOMINAN': 'hidden field', });
lyr_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4.set('fieldLabels', {'KAWASAN': 'hidden field', 'REMARK': 'hidden field', 'LUAS_HA': 'hidden field', 'STATUS': 'hidden field', 'SUMBER': 'hidden field', 'THN_PRODUK': 'hidden field', 'SIPUKAT': 'hidden field', 'PROVINSI': 'hidden field', 'KABUPATEN': 'hidden field', 'PRIORITAS': 'hidden field', 'NON BADAN HUKUM (KELOMPOK)': 'hidden field', 'KOPERASI': 'hidden field', 'BUMDES/BUMDESMA': 'hidden field', 'PERUSAHAAN': 'hidden field', 'BUMD': 'hidden field', 'JUMLAH': 'hidden field', 'LEMBAGA DOMINAN': 'no label', });
lyr_SebaranLembagaEkonomiDominandiKawasanTransmigrasi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});