import React from "react";
import { render } from "@testing-library/react";
<<<<<<< HEAD
import MapComponentView from "./mapComponent.view";
=======
import MapComponentView from "./MapComponent.view";
>>>>>>> a27bc89559bc8ab470ae89b0d4faef1a2433ebb0

describe("MapComponentView", () => {
  test("it renders", () => {
    const { asFragment } = render(
      <MapComponentView
        addDebugMessage={() => {}}
        debugMessages={[]}
        mapCenterPosition={[36.56, -76.17]}
        mapLayers={[]}
        mapMarkers={[]}
        onMapEvent={() => {}}
        setMapRef={() => {}}
        zoom={13}
<<<<<<< HEAD
        heatmap={null}
        
=======
>>>>>>> a27bc89559bc8ab470ae89b0d4faef1a2433ebb0
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
