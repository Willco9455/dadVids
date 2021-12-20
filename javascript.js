$('input[type=radio][name=selector]').change(function() {
    var vid = document.getElementById('video');
    var source = document.getElementById('source');
    source.setAttribute('src', './videos/' + this.value + '.mp4');
    console.log('./videos/' + this.value);
    vid.load();
});