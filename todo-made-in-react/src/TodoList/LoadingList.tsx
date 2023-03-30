import React from 'react';
import ContentLoader from "react-content-loader"

function LoadingList() {
    const width = 1340;
    const height = 4000;
    const heightOfElement = 51;
    const gap = 10;
    const rounding = '25';

    // @ts-ignore
    const elements = [...Array(6).keys()];
    return (
      <div >
          <ContentLoader
              speed={3}
              width={width}
              height={height}
              viewBox={`0 0 ${width} ${height}`}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
          >
              {
                  elements.map(key => (
                  <rect
                      x="0"
                      y={`${key * (gap + heightOfElement)}`}
                      rx={rounding}
                      ry={rounding}
                      width={`${width}`}
                      height={heightOfElement}
                  />))
              }
          </ContentLoader>
      </div>
    );
}

export {LoadingList}