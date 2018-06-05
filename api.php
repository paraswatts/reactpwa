<?php 
        //getting the database connection
		
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

	require_once 'DbConnect.php';
    require_once 'requiredparam.php';
	
	//an array to display response
	$response = array();
	
	//if it is an api call 
	//that means a get parameter named api call is set in the URL 
	//and with this parameter we are concluding that it is an api call 
	if(isset($_GET['apicall'])){
		
		switch($_GET['apicall']){
			case 'checkNumber':
			if(isTheseParametersAvailable(array('residentMobileNo'))){
				$residentMobileNo = $_POST['residentMobileNo']; 
				$stmt = $conn->prepare("SELECT residentId FROM resident WHERE residentMobileNo = ?");
				$stmt->bind_param("s", $residentMobileNo);
				$stmt->execute();
				$stmt->store_result();
					
					//if the user exists in the database 
					if($stmt->num_rows > 0){
						$response['error'] = false;
						$response['message'] = 'Resident Exists';
						$stmt->close();
					}
					else{
						$response['error'] = true;
						$response['message'] = 'Check with admin';
						$stmt->close();
					}
			}else{
					$response['error'] = true; 
					$response['message'] = 'required parameters are not available'; 	
			}
			break;
			
			case 'verifyOTP':
			if(isTheseParametersAvailable(array('otp'))){
				$otp = $_POST['otp']; 
					//if the user exists in the database 
					if($otp==='123456'){
						$response['error'] = false;
						$response['message'] = 'OTP Verified';
						
					}
					else{
						$response['error'] = true;
						$response['message'] = 'Check OTP';
					
					}
			}else{
					$response['error'] = true; 
					$response['message'] = 'required parameters are not available'; 	
			}
			break;
			case 'signup':
				
			if(isTheseParametersAvailable(array('societyId','residentName','ownerName','residentPassword','flatNo','residentMobileNo','residentEmailId','createdAt','flatno','userType'))){
					
					//getting the values 
					$societyId = $_POST['societyId']; 
					$residentName = $_POST['residentName']; 
					$ownerName=$_POST['ownerName']; 
					$residentPassword = md5($_POST['residentPassword']);
					$usertype = $_POST['usertype'];
                    $residentMobileNo = $_POST['residentMobileNo']; 
					$residentEmailId = $_POST['residentEmailId']; 
					$createdAt = md5($_POST['createdAt']);
					$flatno = $_POST['flatno'];
					
					//checking if the user is already exist with this username or email
					//as the email and username should be unique for every user 
					$stmt = $conn->prepare("SELECT residentId FROM resident WHERE residentMobileNo = ? OR residentEmailId = ?");
					$stmt->bind_param("ss", $residentMobileNo, $residentEmailId);
					$stmt->execute();
					$stmt->store_result();
					
					//if the user already exist in the database 
					if($stmt->num_rows > 0){
						$response['error'] = true;
						$response['message'] = 'User already registered';
						$stmt->close();
					}else{
						
						//if user is new creating an insert query 
						$stmt = $conn->prepare("INSERT INTO resident (societyId,residentName,ownerName,residentEmailId,residentPassword,userType,residentMobileNo,flatno,createdAt) VALUES (?,?,?,?,?,?,?,?)");
						$stmt->bind_param("issssssis", $societyId,$residentName,$ownerName,$residentEmailId, $residentPassword,$userType,$residentMobileNo,$flatno,$createdAt);
						
						//if the user is successfully added to the database 
						if($stmt->execute()){
							
							//fetching the user back 
							$stmt = $conn->prepare("SELECT residentName,ownerName,residentEmailId,userType,residentMobileNo,flatno,createdAt,residentId,societyId FROM resident WHERE residentMobileNo = ?"); 
							$stmt->bind_param("s",$residentMobileNo);
							$stmt->execute();
							$stmt->bind_result($residentName,$ownerName,$residentEmailId,$userType, $residentMobileNo,$flatno,$createdAt,$residentId,$societyId);
							$stmt->fetch();
							
							$resident = array(
							
							'residentName'=>$residentName,
							'ownerName'=>$ownerName,
							'residentEmailId'=>$residentEmailId,
							'userType'=>$userType,
							'residentMobileNo'=>$residentMobileNo,
							'flatno'=>$flatno,
							'createdAt'=>$createdAt,
							'residentId'=>$residentId,
							'societyId'=>$societyId
							);
							
							$stmt->close();
							
							//adding the user data in response 
							$response['error'] = false; 
							$response['message'] = 'User registered successfully'; 
							$response['resident'] = $resident; 
						}
					}
					
				}else{
					$response['error'] = true; 
					$response['message'] = 'required parameters are not available'; 
				}
				
			break; 
				
			
            case 'login':
				if(isTheseParametersAvailable(array('mobileno', 'password'))){
					$username = $_POST['mobileno'];
					$password = md5($_POST['password']); 
					
					$stmt = $conn->prepare("SELECT residentName,ownerName,residentEmailId,userType,residentMobileNo,flatno,createdAt,residentId,societyId FROM resident WHERE residentMobileNo = ? AND residentPassword = ?");
					$stmt->bind_param("ss",$mobileno, $password);
					
					$stmt->execute();
					
					$stmt->store_result();
					if($stmt->num_rows > 0){
						
						$stmt->bind_result($residentname,$ownername,$email,$password, $usertype,$mobileno,$flatno,$createdAt,$id);
						$stmt->fetch();
						
						$resident = array(
							'id'=>$id, 
								'residentName'=>$residentName,
							'ownerName'=>$ownerName,
							'residentEmailId'=>$residentEmailId,
							'userType'=>$userType,
							'residentMobileNo'=>$residentMobileNo,
							'flatno'=>$flatno,
							'createdAt'=>$createdAt,
							'residentId'=>$residentId,
							'societyId'=>$societyId
						);
						
						$response['error'] = false; 
						$response['message'] = 'Login successfull'; 
						$response['resident'] = $resident; 
					}else{
						//if the user not found 
						$response['error'] = false; 
						$response['message'] = 'Invalid username or password';
					}
				}
			break; 
			default: 
				$response['error'] = true; 
				$response['message'] = 'Invalid Operation Called';
		}
	}else{
		//if it is not api call 
		//pushing appropriate values to response array 
		$response['error'] = true; 
		$response['message'] = 'Invalid API Call';
	}
	
	//displaying the response in json structure 
	echo json_encode($response);
?>
