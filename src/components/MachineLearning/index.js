import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, H1, Card, Cardbody, Cardname, Carddesc, BackLogo, Wrap, Button} from './MLElements'
import backimg from '../../images/arrow.svg'

const MLPage = () => {
    const navigate = useNavigate();

  return (
    <>
    <Container>
        <H1>Data Science & Machine Learning Projects</H1>
        <Wrap>
            <Card>
                <Cardbody>
                    <Cardname>Titanical</Cardname>
                    <Carddesc>
                        TECH: Python/Google Colab <br/> <br/>
                        •Titanic Kaggle Dataset <br/> •Exploratory Data Modelling •Data Visualization •RandomForestClassifier •Prediction Model via Rankings •Evaluation Metrics Score •Pickle Dump Submission
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/Machine-Learning/blob/main/SupervisedLearning/Titanic_Model.ipynb">Watch Me ! </Button>
                </Cardbody> 
            </Card>

            <Card>
                <Cardbody>
                    <Cardname>HouseBuy</Cardname>
                    <Carddesc>
                        TECH: Python/Jupyter Notebook<br/> <br/>
                        •Raw Housing Dataset <br /> •Exploratory Data Modelling •Data Visualization •MeanRegressionModel •Prediction via House Condition •Metric Evaluation
                    </Carddesc>
                    <Button href="https://github.com/adityajamwal02/Machine-Learning/blob/main/HouseBuy.ipynb"> Watch Me !</Button>
                </Cardbody> 
            </Card>

            <Card>
                <Cardbody>
                    <Cardname> Expresión</Cardname>
                    <Carddesc>
                        TECH: Python/Jupyter Notebook<br/> <br/>
                        •Expression Kaggle Dataset <br /> •Exploratory Data Manipulation •Data Visualization •Tensorflow/OpenCV •Expression Detector Model •Evaluation Metrics Score
                    </Carddesc>
                    <Button> In Progress ! </Button>
                </Cardbody> 
            </Card>
        </Wrap>
        <BackLogo src={backimg} onClick={() => navigate("/")}></BackLogo>
    </Container>   
    </>
  )
}

export default MLPage