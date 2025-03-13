import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { productName } = useParams();
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 px-5">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          {product.description && (
            <p className="text-lg mb-4">{product.description}</p>
          )}
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-md"
            />
          )}
          <h1 className="text-3xl font-bold mb-4 text-primaryGreen underline">
            Features
          </h1>
          {product.features && (
            <ul className="list-disc list-inside mb-8">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <ul className="list-none space-y-2">
            {product.category && (
              <li>
                <strong>Category:</strong> {product.category}
              </li>
            )}
            {product.traySize && (
              <li>
                <strong>Tray Size:</strong> {product.traySize}
              </li>
            )}
            {product.numberOfPcb && (
              <li>
                <strong>Number of PCBs:</strong> {product.numberOfPcb}
              </li>
            )}
            {product.stencilSizeMk && (
              <li>
                <strong>Stencil Size:</strong> {product.stencilSize}
              </li>
            )}
            {product.productivity && (
              <li>
                <strong>Productivity:</strong> {product.productivity}
              </li>
            )}
            {product.reapeatability && (
              <li>
                <strong>Repeatability:</strong> {product.reapeatability}
              </li>
            )}
            {product.directionOfSettingWork && (
              <li>
                <strong>Direction of Setting Work:</strong>{" "}
                {product.directionOfSettingWork}
              </li>
            )}
            {product.pringDirection && (
              <li>
                <strong>Printing Direction:</strong> {product.pringDirection}
              </li>
            )}
            {product.distributionLine && (
              <li>
                <strong>Distribution Line:</strong> {product.distributionLine}
              </li>
            )}
            {product.uiLanguage && (
              <li>
                <strong>UI Language:</strong> {product.uiLanguage}
              </li>
            )}
            {product.powerSupplyUtility && (
              <li>
                <strong>Power Supply Utility:</strong>{" "}
                {product.powerSupplyUtility}
              </li>
            )}
            {product.machineWeight && (
              <li>
                <strong>Machine Weight:</strong> {product.machineWeight}
              </li>
            )}
            {product.layOut && (
              <li>
                <strong>Layout:</strong> {product.layOut}
              </li>
            )}
            {product.screenFrameSize && (
              <li>
                <strong>Screen Frame Size:</strong>
                <ul>
                  {product.screenFrameSize.map((size, index) => (
                    <li key={index}>
                      X: {size.X}, Y: {size.Y}
                      {size.T && `, T: ${size.T}`}
                    </li>
                  ))}
                </ul>
              </li>
            )}

            {product.accommodatedPcbSizeSv && (
              <li>
                <strong>Accommodated PCB Size:</strong>
                <ul>
                  <li>
                    Minimum - X: {product.accommodatedPcbSize.minimum.X}, Y:{" "}
                    {product.accommodatedPcbSize.minimum.Y}, T:{" "}
                    {product.accommodatedPcbSize.minimum.T}
                  </li>
                  <li>
                    Maximum - X: {product.accommodatedPcbSize.maximum.X}, Y:{" "}
                    {product.accommodatedPcbSize.maximum.Y}
                  </li>
                </ul>
              </li>
            )}

            {product.standardPrinting && (
              <li>
                <strong>Standard Printing:</strong>
                <ul>
                  <li>
                    Minimum - X: {product.standardPrinting.minimum.X}, Y:{" "}
                    {product.standardPrinting.minimum.Y}, T:{" "}
                    {product.standardPrinting.minimum.T}
                  </li>
                  <li>
                    Maximum - X: {product.standardPrinting.maximum.X}, Y:{" "}
                    {product.standardPrinting.maximum.Y}
                  </li>
                </ul>
              </li>
            )}

            {product.twoStageSolderThicknessPrinting && (
              <li>
                <strong>Two-Stage Solder Thickness Printing:</strong>
                <ul>
                  <li>
                    Minimum - X:{" "}
                    {product.twoStageSolderThicknessPrinting.minimum.X}, Y:{" "}
                    {product.twoStageSolderThicknessPrinting.minimum.Y}, T:{" "}
                    {product.twoStageSolderThicknessPrinting.minimum.T}
                  </li>
                  <li>
                    Maximum - X:{" "}
                    {product.twoStageSolderThicknessPrinting.maximum.X}, Y:{" "}
                    {product.twoStageSolderThicknessPrinting.maximum.Y}
                  </li>
                </ul>
              </li>
            )}

            {product.conveyorHeight && (
              <li>
                <strong>Conveyor Height:</strong> {product.conveyorHeight}
              </li>
            )}

            {product.overallSize && (
              <li>
                <strong>Overall Size:</strong>
                <ul>
                  {product.overallSize.map((size, index) => (
                    <li key={index}>
                      D: {size.D}, W: {size.W}, H: {size.H}
                    </li>
                  ))}
                </ul>
              </li>
            )}

            {product.weight && (
              <li>
                <strong>Weight:</strong> {product.weight.join(", ")}
              </li>
            )}

            {product.repetitiveAccuracy && (
              <li>
                <strong>Repetitive Accuracy:</strong>{" "}
                {product.repetitiveAccuracy}
              </li>
            )}

            {product.powerUsed && (
              <li>
                <strong>Power Used:</strong> {product.powerUsed}
              </li>
            )}

            {product.examplesOfPrintingWork && (
              <li>
                <strong>Examples of Printing Work:</strong>{" "}
                {product.examplesOfPrintingWork}
              </li>
            )}

            {product.substrate && (
              <li>
                <strong>Substrate:</strong>
                <ul>
                  {product.substrate.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </li>
            )}
            {product.repetitivePositioningAccuracy && (
              <li>
                <strong>Repetitive Positioning Accuracy:</strong>{" "}
                {product.repetitivePositioningAccuracy}
              </li>
            )}

            {product.imageProcessingMethod && (
              <li>
                <strong>Image Processing Method:</strong>{" "}
                {product.imageProcessingMethod}
              </li>
            )}

            {product.standardAccessory && (
              <li>
                <strong>Standard Accessory:</strong> {product.standardAccessory}
              </li>
            )}

            {product.customizationFeatures && (
              <li>
                <strong>Customization Features:</strong>
                <ul>
                  {product.customizationFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </li>
            )}
            {product.pcbSize && (
              <li>
                <strong>PCB Size:</strong>
                <ul>
                  <li>Weight: {product.pcbSize.weight}</li>
                  <li>Length: {product.pcbSize.length}</li>
                </ul>
              </li>
            )}

            {product.ballSize && (
              <li>
                <strong>Ball Size:</strong>
                <ul>
                  <li>Min: {product.ballSize.min}</li>
                  <li>Max: {product.ballSize.max}</li>
                  {product.ballSize["r&dMin"] && (
                    <li>R&D Min: {product.ballSize["r&dMin"]}</li>
                  )}
                </ul>
              </li>
            )}

            {product.ballPitch && (
              <li>
                <strong>Ball Pitch:</strong> {product.ballPitch}
              </li>
            )}

            {product.solderBall && (
              <li>
                <strong>Solder Ball:</strong> {product.solderBall}
              </li>
            )}

            {product.flux && (
              <li>
                <strong>Flux:</strong> {product.flux}
              </li>
            )}

            {product.productivity && (
              <li>
                <strong>Productivity:</strong> {product.productivity}
              </li>
            )}

            {product.accuracy && (
              <li>
                <strong>Accuracy:</strong>
                <ul>
                  <li>X Axis: {product.accuracy.xAxis}</li>
                  <li>Y Axis: {product.accuracy.yAxis}</li>
                  <li>Theta Axis: {product.accuracy.thetaAxis}</li>
                  <li>Flux Printing: {product.accuracy.fluxPrinting}</li>
                  <li>Ball Placing: {product.accuracy.ballPlacing}</li>
                </ul>
              </li>
            )}

            {product.controlRobot && (
              <li>
                <strong>Control Robot:</strong> {product.controlRobot}
              </li>
            )}

            {product.powerSupplyUtility && (
              <li>
                <strong>Power Supply Utility:</strong>{" "}
                {product.powerSupplyUtility}
              </li>
            )}

            {product.usedAirUtility && (
              <li>
                <strong>Used Air Utility:</strong> {product.usedAirUtility}
              </li>
            )}

            {product.powerOutageCompensation && (
              <li>
                <strong>Power Outage Compensation:</strong>{" "}
                {product.powerOutageCompensation}
              </li>
            )}

            {product.directionOfSettingWork && (
              <li>
                <strong>Direction of Setting Work:</strong>{" "}
                {product.directionOfSettingWork}
              </li>
            )}

            {product.distributionLine && (
              <li>
                <strong>Distribution Line:</strong> {product.distributionLine}
              </li>
            )}

            {product.soundLevel && (
              <li>
                <strong>Sound Level:</strong> {product.soundLevel}
              </li>
            )}

            {product.uiLanguage && (
              <li>
                <strong>UI Language:</strong> {product.uiLanguage}
              </li>
            )}

            {product.bodyColor && (
              <li>
                <strong>Body Color:</strong> {product.bodyColor}
              </li>
            )}

            {product.ehsInformation && (
              <li>
                <strong>EHS Information:</strong> {product.ehsInformation}
              </li>
            )}

            {product.layOut && (
              <li>
                <strong>Lay Out:</strong> {product.layOut}
              </li>
            )}
            {product.printingPositioningRepetitiveAccuracy && (
              <li>
                <strong>Printing Positioning Repetitive Accuracy:</strong>{" "}
                {product.printingPositioningRepetitiveAccuracy}
              </li>
            )}

            {product.screenDimensions && (
              <div>
                <strong>Screen Dimensions:</strong>
                <ul>
                  {product.screenDimensions.map((dimension, index) => (
                    <li key={index}>
                      <strong>{dimension.side}:</strong> {dimension.dimensions}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applicableWorkDimensions && (
              <div>
                <strong>Applicable Work Dimensions:</strong>
                <ul>
                  {product.applicableWorkDimensions.map((work, index) => (
                    <li key={index}>
                      <strong>{work.side} - Minimum:</strong> {work.minimum},{" "}
                      <strong>Maximum:</strong> {work.maximum}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.placingSpecifications && (
              <div>
                <strong>Placing Specifications:</strong>
                <ul>
                  <li>
                    <strong>Minimum:</strong>{" "}
                    {product.placingSpecifications.minimum}
                  </li>
                  <li>
                    <strong>Minimum Pitch:</strong>{" "}
                    {product.placingSpecifications.minimumPitch}
                  </li>
                </ul>
              </div>
            )}

            {product.taktTime && (
              <div>
                <strong>Takt Time:</strong>
                <ul>
                  {product.taktTime.map((time, index) => (
                    <li key={index}>
                      <strong>{time.side}:</strong> {time.time}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.boardSpecifications && (
              <div>
                <strong>Board Specifications:</strong>
                <ul>
                  <li>
                    <strong>Size:</strong> {product.boardSpecifications.size}
                  </li>
                  <li>
                    <strong>Number of Placed Balls:</strong>{" "}
                    {product.boardSpecifications.numberOfPlacedBalls}
                  </li>
                  <li>
                    <strong>SR Opening:</strong>{" "}
                    {product.boardSpecifications.srOpening}
                  </li>
                  <li>
                    <strong>Pitch:</strong> {product.boardSpecifications.pitch}
                  </li>
                  <li>
                    <strong>Ball Diameter:</strong>{" "}
                    {product.boardSpecifications.ballDiameter}
                  </li>
                </ul>
              </div>
            )}

            {product.externalDimensionAndWeight && (
              <li>
                <strong>External Dimension and Weight:</strong>{" "}
                {product.externalDimensionAndWeight}
              </li>
            )}
            {product.options && (
              <div>
                <strong>Options:</strong>
                <ul>
                  {product.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.stencilSize && (
              <div>
                <strong>Stencil Size:</strong>
                <ul>
                  {product.stencilSize.map((size, index) => (
                    <li key={index}>{size}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.pcbSize && (
              <div>
                <strong>PCB Size:</strong>
                <ul>
                  {product.pcbSize.dual && (
                    <li>
                      <strong>Dual:</strong> {product.pcbSize.dual}
                    </li>
                  )}
                  {product.pcbSize.single && (
                    <li>
                      <strong>Single:</strong>
                      <ul>
                        {product.pcbSize.single.map((single, index) => (
                          <li key={index}>{single}</li>
                        ))}
                      </ul>
                    </li>
                  )}
                  {product.pcbSize.thickness && (
                    <li>
                      <strong>Thickness:</strong> {product.pcbSize.thickness}
                    </li>
                  )}
                </ul>
              </div>
            )}

            {product.performance && (
              <div>
                <strong>Performance:</strong>
                <ul>
                  {product.performance.productivity && (
                    <li>
                      <strong>Productivity:</strong>{" "}
                      {product.performance.productivity}
                    </li>
                  )}
                  {product.performance.repeatabilityAccuracy && (
                    <li>
                      <strong>Print Positioning Repeatability Accuracy:</strong>{" "}
                      {product.performance.repeatabilityAccuracy}
                    </li>
                  )}
                </ul>
              </div>
            )}

            {product.specifications && (
              <div>
                <strong>Specifications:</strong>
                <ul>
                  {product.specifications.powerSupplyUtility && (
                    <li>
                      <strong>Power Supply Utility:</strong>{" "}
                      {product.specifications.powerSupplyUtility}
                    </li>
                  )}
                  {product.specifications.frequency && (
                    <li>
                      <strong>Frequency:</strong>{" "}
                      {product.specifications.frequency}
                    </li>
                  )}
                  {product.specifications.usedAirUtility && (
                    <li>
                      <strong>Used Air Utility:</strong>{" "}
                      {product.specifications.usedAirUtility}
                    </li>
                  )}
                  {product.specifications.directionOfSettingWork && (
                    <li>
                      <strong>Direction of Setting Work:</strong>
                      <ul>
                        {product.specifications.directionOfSettingWork.map(
                          (direction, index) => (
                            <li key={index}>{direction}</li>
                          )
                        )}
                      </ul>
                    </li>
                  )}
                  {product.specifications.distributionLine && (
                    <li>
                      <strong>Distribution Line:</strong>{" "}
                      {product.specifications.distributionLine}
                    </li>
                  )}
                  {product.specifications.uiLanguage && (
                    <li>
                      <strong>UI Language:</strong>{" "}
                      {product.specifications.uiLanguage}
                    </li>
                  )}
                  {product.specifications.machineWeight && (
                    <li>
                      <strong>Machine Weight:</strong>{" "}
                      {product.specifications.machineWeight}
                    </li>
                  )}
                  {product.specifications.printingDirection && (
                    <li>
                      <strong>Printing Direction:</strong>{" "}
                      {product.specifications.printingDirection}
                    </li>
                  )}
                  {product.specifications.visionFov && (
                    <li>
                      <strong>Vision FOV:</strong>{" "}
                      {product.specifications.visionFov}
                    </li>
                  )}
                  {product.specifications.softwareOperatingSystem && (
                    <li>
                      <strong>Software Operating System:</strong>{" "}
                      {product.specifications.softwareOperatingSystem}
                    </li>
                  )}
                  {product.specifications.layout && (
                    <li>
                      <strong>Layout:</strong> {product.specifications.layout}
                    </li>
                  )}
                </ul>
              </div>
            )}
            {product.workSize && (
              <div>
                <strong>Work Size:</strong>
                <ul>
                  {product.workSize.type && (
                    <li>
                      <strong>Type:</strong> {product.workSize.type}
                    </li>
                  )}
                  {product.workSize.maxDimensions && (
                    <li>
                      <strong>Max Dimensions:</strong>{" "}
                      {product.workSize.maxDimensions}
                    </li>
                  )}
                  {product.workSize.thickness && (
                    <li>
                      <strong>Thickness:</strong> {product.workSize.thickness}
                    </li>
                  )}
                  {product.workSize.warpage && (
                    <li>
                      <strong>Work Warpage:</strong> {product.workSize.warpage}
                    </li>
                  )}
                </ul>
              </div>
            )}
            {product.specifications && (
              <div>
                <ul>
                  {product.specifications.uph && (
                    <li>
                      <strong>UPH:</strong> {product.specifications.uph}
                    </li>
                  )}
                  {product.specifications.stageTemperature && (
                    <li>
                      <strong>Stage Temperature:</strong>{" "}
                      {product.specifications.stageTemperature}
                    </li>
                  )}
                  {product.specifications.laserPower && (
                    <li>
                      <strong>Laser Power:</strong>{" "}
                      {product.specifications.laserPower}
                    </li>
                  )}
                  {product.specifications.laserWarranty && (
                    <li>
                      <strong>Laser Warranty:</strong>
                      <ul>
                        {product.specifications.laserWarranty.source && (
                          <li>
                            <strong>Source:</strong>{" "}
                            {product.specifications.laserWarranty.source}
                          </li>
                        )}
                        {product.specifications.laserWarranty.system && (
                          <li>
                            <strong>System:</strong>{" "}
                            {product.specifications.laserWarranty.system}
                          </li>
                        )}
                      </ul>
                    </li>
                  )}
                  {product.specifications.homogenizerBeamSize && (
                    <li>
                      <strong>Homogenizer Beam Size:</strong>{" "}
                      {product.specifications.homogenizerBeamSize}
                    </li>
                  )}
                  {product.specifications.substrates && (
                    <li>
                      <strong>Substrates:</strong>
                      <ul>
                        {product.specifications.substrates.single && (
                          <li>
                            <strong>Single:</strong>{" "}
                            {product.specifications.substrates.single}
                          </li>
                        )}
                        {product.specifications.substrates.dual && (
                          <li>
                            <strong>Dual:</strong>{" "}
                            {product.specifications.substrates.dual}
                          </li>
                        )}
                      </ul>
                    </li>
                  )}
                  {product.specifications.index && (
                    <li>
                      <strong>Index:</strong>
                      <ul>
                        {product.specifications.index.substrate && (
                          <li>
                            <strong>Substrate:</strong>{" "}
                            {product.specifications.index.substrate}
                          </li>
                        )}
                        {product.specifications.index.wafer && (
                          <li>
                            <strong>Wafer:</strong>{" "}
                            {product.specifications.index.wafer}
                          </li>
                        )}
                      </ul>
                    </li>
                  )}
                  {product.specifications.optionalItems && (
                    <div>
                      <strong>Optional Items:</strong>
                      <ul>
                        {product.specifications.optionalItems.map(
                          (item, index) => (
                            <li
                              key={index}
                              style={{
                                listStyleType: "disc",
                                marginLeft: "20px",
                              }}
                            >
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </ul>
              </div>
            )}
            {product.pcbSizemkd && (
              <div>
                <strong>PCB Size:</strong>
                <ul>
                  {product.pcbSizemkd.x && (
                    <li>
                      <strong>X:</strong> {product.pcbSizemkd.x}
                    </li>
                  )}
                  {product.pcbSizemkd.y && (
                    <li>
                      <strong>Y:</strong> {product.pcbSizemkd.y}
                    </li>
                  )}
                  {product.pcbSizemkd.thickness && (
                    <li>
                      <strong>Thickness:</strong> {product.pcbSizemkd.thickness}
                    </li>
                  )}
                </ul>
              </div>
            )}
            {product.type && (
              <div>
                <strong>Type:</strong>
                <ul>
                  {product.type.map((type, index) => (
                    <li key={index}>{type}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.screenFrameSizeMk && (
              <div>
                <strong>Screen Frame Size:</strong>
                <ul>
                  {product.screenFrameSizeMk.map((size, index) => (
                    <li key={index}>{size}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.accommodatedPcbSizeMk && (
              <div>
                <strong>Accommodated PCB/Substrate Size:</strong>
                <ul>
                  {product.accommodatedPcbSizeMk.map((pcb, index) => (
                    <li key={index}>
                      <strong>Type:</strong> {pcb.type}
                      <ul>
                        <li>
                          <strong>Minimum:</strong> {pcb.minimum}
                        </li>
                        <li>
                          <strong>Maximum:</strong> {pcb.maximum}
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.overallSize && (
              <div>
                <strong>Overall Size:</strong>
                <ul>
                  {product.overallSize.map((size, index) => (
                    <li key={index}>{size}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.weight && (
              <div>
                <strong>Weight:</strong>
                <ul>
                  {product.weight.map((weight, index) => (
                    <li key={index}>{weight}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.repeatabilityAccuracy && (
              <li>
                <strong>Repetitive Positioning Accuracy for Printing:</strong>{" "}
                {product.repeatabilityAccuracy}
              </li>
            )}

            {product.powerUsed && (
              <li>
                <strong>Power Used:</strong> {product.powerUsed}
              </li>
            )}

            {product.imageProcessingMethod && (
              <li>
                <strong>Image Processing Method:</strong>{" "}
                {product.imageProcessingMethod}
              </li>
            )}

            {product.basicCycleTime && (
              <div>
                <strong>Basic Cycle Time:</strong>
                <ul>
                  {product.basicCycleTime.mType && (
                    <li>
                      <strong>M Type:</strong> {product.basicCycleTime.mType}
                    </li>
                  )}
                  {product.basicCycleTime.lType && (
                    <li>
                      <strong>L Type:</strong> {product.basicCycleTime.lType}
                    </li>
                  )}
                </ul>
              </div>
            )}

            {product.pcbFixingMethod && (
              <li>
                <strong>PCB/Substrate Fixing Method:</strong>{" "}
                {product.pcbFixingMethod}
              </li>
            )}
            {product.screenFrameDimensions && (
              <li>
                <strong>Screen Frame Dimensions:</strong>{" "}
                {product.screenFrameDimensions}
              </li>
            )}

            {product.applicableWorkDimensionsMini && (
              <div>
                <strong>Applicable Work Dimensions:</strong>
                <ul>
                  {product.applicableWorkDimensionsMini.minimum && (
                    <li>
                      <strong>Minimum:</strong>{" "}
                      {product.applicableWorkDimensionsMini.minimum}
                    </li>
                  )}
                  {product.applicableWorkDimensionsMini.maximum && (
                    <li>
                      <strong>Maximum:</strong>{" "}
                      {product.applicableWorkDimensionsMini.maximum}
                    </li>
                  )}
                </ul>
              </div>
            )}

            {product.workFixingMethod && (
              <li>
                <strong>Work Fixing Method:</strong> {product.workFixingMethod}
              </li>
            )}

            {product.metalStencilFixingMethod && (
              <li>
                <strong>Metal Stencil Fixing Method:</strong>{" "}
                {product.metalStencilFixingMethod}
              </li>
            )}

            {product.powerSource && (
              <li>
                <strong>Power Source:</strong> {product.powerSource}
              </li>
            )}

            {product.usedAir && (
              <li>
                <strong>Used Air:</strong> {product.usedAir}
              </li>
            )}

            {product.machineDimension && (
              <li>
                <strong>Machine Dimension:</strong> {product.machineDimension}
              </li>
            )}
            {product.type && (
              <div>
                <strong>Type:</strong>
                <ul>
                  {product.type.map((type, index) => (
                    <li key={index}>{type}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.screenFrameSizeSv && (
              <div>
                <strong>Screen Frame Size (SV):</strong>
                <ul>
                  {product.screenFrameSizeSv.map((size, index) => (
                    <li key={index}>{size}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.accommodatedPcbSizeSv && (
              <div>
                <strong>Accommodated PCB/Substrate Size (SV):</strong>
                <ul>
                  {product.accommodatedPcbSizeSv.map((pcb, index) => (
                    <li key={index}>
                      <strong>Type:</strong> {pcb.type}
                      <ul>
                        <li>
                          <strong>Minimum:</strong> {pcb.minimum}
                        </li>
                        <li>
                          <strong>Maximum:</strong> {pcb.maximum}
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.overallSizeSv && (
              <div>
                <strong>Overall Size (SV):</strong>
                <ul>
                  {product.overallSizeSv.map((size, index) => (
                    <li key={index}>{size}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.typeSs && (
              <li>
                <strong>Type (SS):</strong> {product.typeSs}
              </li>
            )}

            {product.screenFrameSizeLl && (
              <li>
                <strong>Screen Frame Size (LL):</strong>{" "}
                {product.screenFrameSizeLl}
              </li>
            )}

            {product.accommodatedPcbSizeLl && (
              <div>
                <strong>Accommodated PCB/Substrate Size (LL):</strong>
                <ul>
                  {product.accommodatedPcbSizeLl.standardPrinting && (
                    <li>
                      <strong>Standard Printing:</strong>
                      <ul>
                        <li>
                          <strong>Minimum:</strong>{" "}
                          {
                            product.accommodatedPcbSizeLl.standardPrinting
                              .minimum
                          }
                        </li>
                        <li>
                          <strong>Maximum:</strong>{" "}
                          {
                            product.accommodatedPcbSizeLl.standardPrinting
                              .maximum
                          }
                        </li>
                      </ul>
                    </li>
                  )}
                  {product.accommodatedPcbSizeLl
                    .twoStageSolderThicknessPrinting && (
                    <li>
                      <strong>Two-Stage Solder Thickness Printing:</strong>
                      <ul>
                        <li>
                          <strong>Minimum:</strong>{" "}
                          {
                            product.accommodatedPcbSizeLl
                              .twoStageSolderThicknessPrinting.minimum
                          }
                        </li>
                        <li>
                          <strong>Maximum:</strong>{" "}
                          {
                            product.accommodatedPcbSizeLl
                              .twoStageSolderThicknessPrinting.maximum
                          }
                        </li>
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            )}

            {product.overallSizeLl && (
              <li>
                <strong>Overall Size (LL):</strong> {product.overallSizeLl}
              </li>
            )}

            {product.weightSs && (
              <li>
                <strong>Weight (SS):</strong> {product.weightSs}
              </li>
            )}

            {product.repeatabilityAccuracySs && (
              <li>
                <strong>
                  Repetitive Positioning Accuracy for Printing (SS):
                </strong>{" "}
                {product.repeatabilityAccuracySs}
              </li>
            )}

            {product.powerUsedSs && (
              <li>
                <strong>Power Used (SS):</strong> {product.powerUsedSs}
              </li>
            )}

            {product.imageProcessingMethodSs && (
              <li>
                <strong>Image Processing Method (SS):</strong>{" "}
                {product.imageProcessingMethodSs}
              </li>
            )}

            {product.pcbFixingMethodSs && (
              <li>
                <strong>PCB/Substrate Fixing Method (SS):</strong>{" "}
                {product.pcbFixingMethodSs}
              </li>
            )}
          </ul>

          {product.image2 && (
            <img
              src={product.image2}
              alt={`${product.name} alternate`}
              className="w-full h-auto rounded-md mt-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
