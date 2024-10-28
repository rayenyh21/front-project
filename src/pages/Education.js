import React from 'react';
import './EducationStyle.css';

const Education = () => {
  return (
    <>
    <div className='box'>
      <h1 className='Education_time'> Education Time </h1>
      <br/><br/>***
      <h3> Importance of Proteins </h3> 
      <br/><br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/zxWbwNtWFik?si=tPB9BxBckgIBbfpj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br/><br/>
      <h3> General Information </h3>
      <br/><br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_MNFSIsx_f0?si=DZsve2dLC4YH9dr_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br/><br/>
      <h3> Consumption of Proteins </h3> 
      <br/><br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/s81IO0i78B0?si=IeMjpBasl2yw8C-5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  
    {/* New Section for Scientific Articles */}
    <div className='articles'>
      <h2> Scientific Articles on Protein Benefits for Muscle Building</h2>
      <ul>
        <li><a href="https://doi.org/10.1093/eurpub/ckaa040.004" target="_blank" rel="noopener noreferrer">Whey Protein Supplementation in Muscle Hypertrophy</a> - Oxford Academic</li>
        <li><a href="https://link.springer.com/article/10.1007/s00421-021-04624-0" target="_blank" rel="noopener noreferrer">Effects of Protein Supplements on Muscle Mass, Strength, and Function</a> - Springer</li>
        <li><a href="https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-017-0593-2" target="_blank" rel="noopener noreferrer">Effect of Animal vs. Plant Protein on Muscle Mass</a> - BioMed Central</li>
      </ul>
    </div>
  
    {/* Section for Images in 3/2 Layout */}
    <div className='images'>
      <img src="https://www.grandviewresearch.com/static/img/research/global-whey-protein-market.webp" alt="Statistic 1" width="600" height="400" />
    </div>


  
      <footer id='fe'>
        2023-2024 © Copyright MyWay.tn. All Rights Reserved.
      </footer>


 
    </> );
};

export default Education;
