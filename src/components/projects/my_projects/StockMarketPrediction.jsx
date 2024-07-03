// src/components/projects/my_projects/StockMarketPrediction.jsx

import '../projects.css';
import React from 'react';
import LinkCard from '../LinkCard';
import ReadMore from '../ReadMore';

const StockMarketPrediction = () => {
  return (
    <div className="project-card">
      <ReadMore title="Stock Market Prediction with LSTM">
        <p className="education-second-subtitle">July 2022 - August 2022</p>

        <p className="project-description">
          <strong>Stock Market Prediction with LSTM</strong> explores the use of Long Short-Term Memory (LSTM) networks for stock market prediction. The notebook contains Python code for training an LSTM model to predict stock prices based on historical data.
        </p>
        <h4 className="features-title">Overview:</h4>
        <p className="project-description">
          The project aims to implement an LSTM model to predict stock prices using historical data. It includes steps for data preprocessing, model training, evaluation, and prediction.
        </p>
        <h4 className="features-title">Data:</h4>
        <p className="project-description">
          The dataset used in this project contains historical stock prices for a specific stock ticker ('XLB') from November 30, 2018, to November 30, 2022.
        </p>
        <h4 className="features-title">Model Architecture:</h4>
        <p className="project-description">
          The LSTM model architecture consists of two LSTM layers followed by two dense layers. The model is compiled using the Adam optimizer and trained using mean squared error loss.
        </p>
        <h4 className="features-title">Results:</h4>
        <p className="project-description">
          The trained model is evaluated on a test dataset, and the predictions are compared with the actual stock prices. Evaluation metrics such as root mean squared error (RMSE) and average percent error are calculated to assess the model's performance.
        </p>
        <h4 className="features-title">How to Use:</h4>
        <ul className="project-features">
          <li>Install the required dependencies listed in the notebook.</li>
          <li>Download the dataset or use a different stock ticker for analysis.</li>
          <li>Execute each cell in the notebook sequentially to preprocess the data, train the model, and make predictions.</li>
        </ul>
        <h4 className="features-title">Conclusion:</h4>
        <p className="project-description">
          The LSTM model demonstrates reasonable performance in predicting stock prices based on historical data. Further optimization and experimentation could improve the accuracy of the predictions.
        </p>
        <div className="project-links">
          <LinkCard 
            text="GitHub Repository" 
            url="https://github.com/aluthra23/GICS-Stock-Predictor" 
            icon="https://www.svgrepo.com/show/475654/github-color.svg"
            hoverColor="#444" 
          />
        </div>
      </ReadMore>
    </div>
  );
};

export default StockMarketPrediction;
