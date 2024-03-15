import './Course.css'
import { Card,Image,Stack,Heading,Text,CardBody,Divider,CardFooter,Button,ButtonGroup ,Alert,AlertIcon} from '@chakra-ui/react'
import { useState } from 'react';
function Course(){
  const [showAlert, setShowAlert] = useState(false);

  const HandleClick = () => {
    setShowAlert(true);
    // You can add more logic here for enrollment process


  };
    return(
        <div id='course-container'>
          {showAlert && (
        <Stack spacing={1}>
          <Alert status='success' variant='solid'>
            <AlertIcon />
           Congratulations you are enrolled for this course
          </Alert>
        </Stack>
      )}

<Card id='course-Card' maxW='sm'>
  <CardBody>
    <Image style={{height:"150px"}} 
      src='https://masai-website-images.s3.ap-south-1.amazonaws.com/full_stack1_329d6b5595.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>journalists Course</Heading>
      <Text>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, facere. Eius odio ab facilis modi laudantium. Incidunt dignissimos corporis doloremque!
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2' id='btngroup'>
      <Button variant='solid' colorScheme='blue'onClick={HandleClick} >
        Enroll Now
      </Button>
     
    </ButtonGroup>
  </CardFooter>
</Card>


        </div>
    )
}

export default Course