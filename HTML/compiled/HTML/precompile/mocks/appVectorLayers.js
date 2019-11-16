"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_webview_leaflet_1 = require("react-native-webview-leaflet");
exports.circle = {
    type: react_native_webview_leaflet_1.MapVectorLayerType.CIRCLE,
    color: '#123123',
    id: 1,
    center: { lat: 34.225727, lng: -77.94471 },
    radius: 2000
};
exports.circleMarker = {
    type: react_native_webview_leaflet_1.MapVectorLayerType.CIRCLE_MARKER,
    color: 'red',
    id: 2,
    center: { lat: 38.437424, lng: -78.867912 },
    radius: 15
};
exports.polygon = {
    type: react_native_webview_leaflet_1.MapVectorLayerType.POLYGON,
    color: 'blue',
    id: 3,
    positions: [
        { lat: 38.80118939192329, lng: -74.69604492187501 },
        { lat: 38.19502155795575, lng: -74.65209960937501 },
        { lat: 39.07890809706475, lng: -71.46606445312501 }
    ]
};
exports.multiPolygon = {
    type: react_native_webview_leaflet_1.MapVectorLayerType.POLYGON,
    color: 'violet',
    id: 4,
    positions: [
        [
            { lat: 37.13842453422676, lng: -74.28955078125001 },
            { lat: 36.4433803110554, lng: -74.26208496093751 },
            { lat: 36.43896124085948, lng: -73.00964355468751 },
            { lat: 36.43896124085948, lng: -73.00964355468751 }
        ],
        [
            { lat: 37.505368263398104, lng: -72.38891601562501 },
            { lat: 37.309014074275915, lng: -71.96594238281251 },
            { lat: 36.69044623523481, lng: -71.87805175781251 },
            { lat: 36.58024660149866, lng: -72.75146484375001 },
            { lat: 37.36579146999664, lng: -72.88330078125001 }
        ]
    ]
};
exports.polyline = {
    type: react_native_webview_leaflet_1.MapVectorLayerType.POLYLINE,
    color: 'orange',
    id: 5,
    positions: [
        { lat: 35.411438052435486, lng: -78.67858886718751 },
        { lat: 35.9602229692967, lng: -79.18945312500001 },
        { lat: 35.97356075349624, lng: -78.30505371093751 }
    ]
};
exports.multiPolyline = {
    type: react_native_webview_leaflet_1.MapVectorLayerType.POLYLINE,
    color: 'purple',
    id: '5a',
    positions: [
        [
            { lat: 36.36822190085111, lng: -79.26086425781251 },
            { lat: 36.659606226479696, lng: -79.28833007812501 },
            { lat: 36.721273880045004, lng: -79.81018066406251 }
        ],
        [
            { lat: 35.43381992014202, lng: -79.79370117187501 },
            { lat: 35.44277092585766, lng: -81.23840332031251 },
            { lat: 35.007502842952896, lng: -80.837402343750017 }
        ]
    ]
};
exports.rectangle = {
    type: react_native_webview_leaflet_1.MapVectorLayerType.RECTANGLE,
    color: 'yellow',
    id: 6,
    bounds: {
        southWest: { lat: 51.49, lng: -0.08 },
        northEast: { lat: 51.5, lng: -0.06 }
    }
};
var mapVectorLayers = [
    exports.circle
    /* circleMarker,
    polygon,
    multiPolygon,
    polyline,
    multiPolyline,
    rectangle */
];
exports.default = mapVectorLayers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwVmVjdG9yTGF5ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJlY29tcGlsZS9tb2Nrcy9hcHBWZWN0b3JMYXllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2RUFPc0M7QUFFekIsUUFBQSxNQUFNLEdBQXlCO0lBQzFDLElBQUksRUFBRSxpREFBa0IsQ0FBQyxNQUFNO0lBQy9CLEtBQUssRUFBRSxTQUFTO0lBQ2hCLEVBQUUsRUFBRSxDQUFDO0lBQ0wsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDMUMsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQStCO0lBQ3RELElBQUksRUFBRSxpREFBa0IsQ0FBQyxhQUFhO0lBQ3RDLEtBQUssRUFBRSxLQUFLO0lBQ1osRUFBRSxFQUFFLENBQUM7SUFDTCxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRTtJQUMzQyxNQUFNLEVBQUUsRUFBRTtDQUNYLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBMEI7SUFDNUMsSUFBSSxFQUFFLGlEQUFrQixDQUFDLE9BQU87SUFDaEMsS0FBSyxFQUFFLE1BQU07SUFDYixFQUFFLEVBQUUsQ0FBQztJQUNMLFNBQVMsRUFBRTtRQUNULEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ25ELEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ25ELEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFO0tBQ3BEO0NBQ0YsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUEwQjtJQUNqRCxJQUFJLEVBQUUsaURBQWtCLENBQUMsT0FBTztJ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IHtcclxuICBNYXBWZWN0b3JMYXllckNpcmNsZSxcclxuICBNYXBWZWN0b3JMYXllclR5cGUsXHJcbiAgTWFwVmVjdG9yTGF5ZXJDaXJjbGVNYXJrZXIsXHJcbiAgTWFwVmVjdG9yTGF5ZXJQb2x5Z29uLFxyXG4gIE1hcFZlY3RvckxheWVyUG9seWxpbmUsXHJcbiAgTWFwVmVjdG9yTGF5ZXJSZWN0YW5nbGVcclxufSBmcm9tICdyZWFjdC1uYXRpdmUtd2Vidmlldy1sZWFmbGV0JztcclxuXHJcbmV4cG9ydCBjb25zdCBjaXJjbGU6IE1hcFZlY3RvckxheWVyQ2lyY2xlID0ge1xyXG4gIHR5cGU6IE1hcFZlY3RvckxheWVyVHlwZS5DSVJDTEUsXHJcbiAgY29sb3I6ICcjMTIzMTIzJyxcclxuICBpZDogMSxcclxuICBjZW50ZXI6IHsgbGF0OiAzNC4yMjU3MjcsIGxuZzogLTc3Ljk0NDcxIH0sXHJcbiAgcmFkaXVzOiAyMDAwXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2lyY2xlTWFya2VyOiBNYXBWZWN0b3JMYXllckNpcmNsZU1hcmtlciA9IHtcclxuICB0eXBlOiBNYXBWZWN0b3JMYXllclR5cGUuQ0lSQ0xFX01BUktFUixcclxuICBjb2xvcjogJ3JlZCcsXHJcbiAgaWQ6IDIsXHJcbiAgY2VudGVyOiB7IGxhdDogMzguNDM3NDI0LCBsbmc6IC03OC44Njc5MTIgfSxcclxuICByYWRpdXM6IDE1XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcG9seWdvbjogTWFwVmVjdG9yTGF5ZXJQb2x5Z29uID0ge1xyXG4gIHR5cGU6IE1hcFZlY3RvckxheWVyVHlwZS5QT0xZR09OLFxyXG4gIGNvbG9yOiAnYmx1ZScsXHJcbiAgaWQ6IDMsXHJcbiAgcG9zaXRpb25zOiBbXHJcbiAgICB7IGxhdDogMzguODAxMTg5MzkxOTIzMjksIGxuZzogLTc0LjY5NjA0NDkyMTg3NTAxIH0sXHJcbiAgICB7IGxhdDogMzguMTk1MDIxNTU3OTU1NzUsIGxuZzogLTc0LjY1MjA5OTYwOTM3NTAxIH0sXHJcbiAgICB7IGxhdDogMzkuMDc4OTA4MDk3MDY0NzUsIGxuZzogLTcxLjQ2NjA2NDQ1MzEyNTAxIH1cclxuICBdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbXVsdGlQb2x5Z29uOiBNYXBWZWN0b3JMYXllclBvbHlnb24gPSB7XHJcbiAgdHlwZTogTWFwVmVjdG9yTGF5ZXJUeXBlLlBPTFlHT04sXHJcbiAgY29sb3I6ICd2aW9sZXQnLFxyXG4gIGlkOiA0LFxyXG4gIHBvc2l0aW9uczogW1xyXG4gICAgW1xyXG4gICAgICB7IGxhdDogMzcuMTM4NDI0NTM0MjI2NzYsIGxuZzogLTc0LjI4OTU1MDc4MTI1MDAxIH0sXHJcbiAgICAgIHsgbGF0OiAzNi40NDMzODAzMTEwNTU0LCBsbmc6IC03NC4yNjIwODQ5NjA5Mzc1MSB9LFxyXG4gICAgICB7IGxhdDogMzYuNDM4OTYxMjQwODU5NDgsIGxuZzogLTczLjAwOTY0MzU1NDY4NzUxIH0sXHJcbiAgICAgIHsgbGF0OiAzNi40Mzg5NjEyNDA4NTk0OCwgbG5nOiAtNzMuMDA5NjQzNTU0Njg3NTEgfVxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgeyBsYXQ6IDM3LjUwNTM2ODI2MzM5ODEwNCwgbG5nOiAtNzIuMzg4OTE2MDE1NjI1MDEgfSxcclxuICAgICAgeyBsYXQ6IDM3LjMwOTAxNDA3NDI3NTkxNSwgbG5nOiAtNzEuOTY1OTQyMzgyODEyNTEgfSxcclxuICAgICAgeyBsYXQ6IDM2LjY5MDQ0NjIzNTIzNDgxLCBsbmc6IC03MS44NzgwNTE3NTc4MTI1MSB9LFxyXG4gICAgICB7IGxhdDogMzYuNTgwMjQ2NjAxNDk4NjYsIGxuZzogLTcyLjc1MTQ2NDg0Mzc1MDAxIH0sXHJcbiAgICAgIHsgbGF0OiAzNy4zNjU3OTE0Njk5OTY2NCwgbG5nOiAtNzIuODgzMzAwNzgxMjUwMDEgfVxyXG4gICAgXVxyXG4gIF1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb2x5bGluZTogTWFwVmVjdG9yTGF5ZXJQb2x5bGluZSA9IHtcclxuICB0eXBlOiBNYXBWZWN0b3JMYXllclR5cGUuUE9MWUxJTkUsXHJcbiAgY29sb3I6ICdvcmFuZ2UnLFxyXG4gIGlkOiA1LFxyXG4gIHBvc2l0aW9uczogW1xyXG4gICAgeyBsYXQ6IDM1LjQxMTQzODA1MjQzNTQ4NiwgbG5nOiAtNzguNjc4NTg4ODY3MTg3NTEgfSxcclxuICAgIHsgbGF0OiAzNS45NjAyMjI5NjkyOTY3LCBsbmc6IC03OS4xODk0NTMxMjUwMDAwMSB9LFxyXG4gICAgeyBsYXQ6IDM1Ljk3MzU2MDc1MzQ5NjI0LCBsbmc6IC03OC4zMDUwNTM3MTA5Mzc1MSB9XHJcbiAgXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG11bHRpUG9seWxpbmU6IE1hcFZlY3RvckxheWVyUG9seWxpbmUgPSB7XHJcbiAgdHlwZTogTWFwVmVjdG9yTGF5ZXJUeXBlLlBPTFlMSU5FLFxyXG4gIGNvbG9yOiAncHVycGxlJyxcclxuICBpZDogJzVhJyxcclxuICBwb3NpdGlvbnM6IFtcclxuICAgIFtcclxuICAgICAgeyBsYXQ6IDM2LjM2ODIyMTkwMDg1MTExLCBsbmc6IC03OS4yNjA4NjQyNTc4MTI1MSB9LFxyXG4gICAgICB7IGxhdDogMzYuNjU5NjA2MjI2NDc5Njk2LCBsbmc6IC03OS4yODgzMzAwNzgxMjUwMSB9LFxyXG4gICAgICB7IGxhdDogMzYuNzIxMjczODgwMDQ1MDA0LCBsbmc6IC03OS44MTAxODA2NjQwNjI1MSB9XHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICB7IGxhdDogMzUuNDMzODE5OTIwMTQyMDIsIGxuZzogLTc5Ljc5MzcwMTE3MTg3NTAxIH0sXHJcbiAgICAgIHsgbGF0OiAzNS40NDI3NzA5MjU4NTc2NiwgbG5nOiAtODEuMjM4NDAzMzIwMzEyNTEgfSxcclxuICAgICAgeyBsYXQ6IDM1LjAwNzUwMjg0Mjk1Mjg5NiwgbG5nOiAtODAuODM3NDAyMzQzNzUwMDE3IH1cclxuICAgIF1cclxuICBdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVjdGFuZ2xlOiBNYXBWZWN0b3JMYXllclJlY3RhbmdsZSA9IHtcclxuICB0eXBlOiBNYXBWZWN0b3JMYXllclR5cGUuUkVDVEFOR0xFLFxyXG4gIGNvbG9yOiAneWVsbG93JyxcclxuICBpZDogNixcclxuICBib3VuZHM6IHtcclxuICAgIHNvdXRoV2VzdDogeyBsYXQ6IDUxLjQ5LCBsbmc6IC0wLjA4IH0sXHJcbiAgICBub3J0aEVhc3Q6IHsgbGF0OiA1MS41LCBsbmc6IC0wLjA2IH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBtYXBWZWN0b3JMYXllcnM6IChcclxuICB8IE1hcFZlY3RvckxheWVyQ2lyY2xlXHJcbiAgfCBNYXBWZWN0b3JMYXllckNpcmNsZU1hcmtlclxyXG4gIHwgTWFwVmVjdG9yTGF5ZXJQb2x5bGluZVxyXG4gIHwgTWFwVmVjdG9yTGF5ZXJQb2x5Z29uXHJcbiAgfCBNYXBWZWN0b3JMYXllclJlY3RhbmdsZSlbXSA9IFtcclxuICBjaXJjbGVcclxuICAvKiBjaXJjbGVNYXJrZXIsXHJcbiAgcG9seWdvbixcclxuICBtdWx0aVBvbHlnb24sXHJcbiAgcG9seWxpbmUsXHJcbiAgbXVsdGlQb2x5bGluZSxcclxuICByZWN0YW5nbGUgKi9cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hcFZlY3RvckxheWVycztcclxuIl19