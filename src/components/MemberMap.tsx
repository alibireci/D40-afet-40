import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { cities } from '../data';

export default function MemberMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 450;
    const svg = d3.select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`);

    const projection = d3.geoNaturalEarth1()
      .scale(150)
      .translate([width / 2, height / 1.5]);

    const path = d3.geoPath().projection(projection);

    // Load world map data
    d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson').then((data: any) => {
      svg.append('g')
        .selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', '#E2E8F0')
        .attr('stroke', '#FFFFFF')
        .attr('stroke-width', 0.5);

      // Add cities
      svg.selectAll('circle')
        .data(cities)
        .enter()
        .append('circle')
        .attr('cx', d => projection(d.coordinates)![0])
        .attr('cy', d => projection(d.coordinates)![1])
        .attr('r', 5)
        .attr('fill', '#FF6B35')
        .attr('stroke', '#FFFFFF')
        .attr('stroke-width', 2)
        .style('cursor', 'pointer')
        .on('mouseover', function(event, d) {
          d3.select(this).transition().attr('r', 8);
        })
        .on('mouseout', function(event, d) {
          d3.select(this).transition().attr('r', 5);
        });
        
      // Add labels
      svg.selectAll('text')
        .data(cities)
        .enter()
        .append('text')
        .attr('x', d => projection(d.coordinates)![0] + 8)
        .attr('y', d => projection(d.coordinates)![1] + 4)
        .text(d => d.name)
        .attr('font-size', '10px')
        .attr('font-weight', 'bold')
        .attr('fill', '#0A192F')
        .style('pointer-events', 'none');
    });
  }, []);

  return (
    <div className="w-full aspect-video glass-card rounded-2xl overflow-hidden relative">
      <svg ref={svgRef} className="w-full h-full" />
      <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-sm border border-brand-blue/5">
        <h5 className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">Network Status</h5>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-brand-orange rounded-full animate-pulse" />
          <span className="text-sm font-medium">Active Member Cities</span>
        </div>
      </div>
    </div>
  );
}
