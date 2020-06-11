import * as React from "react";
import { HeatMap, WebViewLeafletEvents } from "./models";
import HeatmapLayer from "react-leaflet-heatmap-layer"

interface HeatMapProps {
  heatmap: HeatMap;
  onMapEvent: (mapEvent: WebViewLeafletEvents, payload: any) => void;
}

class HeatMapLayer extends React.Component<HeatMapProps> {
  private HeatMaps = ({ heatMap }: { heatMap: HeatMap }) => {
    return (
      <HeatmapLayer  
        fitBoundsOnLoad={heatMap.fitBoundsOnLoad}  
        fitBoundsOnUpdate={heatMap.fitBoundsOnUpdate}
        points={heatMap.points}
        max={heatMap.max}
        radius={heatMap.radius}
        maxZoom={heatMap.maxZoom}
        longitudeExtractor={heatMap.longitudeExtractor}
        latitudeExtractor={heatMap.latitudeExtractor}
        intensityExtractor={heatMap.intensityExtractor}
        gradient={heatMap.gradient}
      />
    );
  };
 
  render() {
    const { heatmap } = this.props;
    return (
        <this.HeatMaps heatMap={heatmap} />  
    );
  }
}

export default HeatMapLayer;
