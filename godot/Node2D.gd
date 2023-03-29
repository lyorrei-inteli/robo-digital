extends Node2D

func _on_Button_pressed():
	$HTTPRequest.request("http://localhost:3000/lastPosition")

func _on_HTTPRequest_request_completed(result, response_code, headers, body):
	# Transformando a 
	var json = JSON.parse(body.get_string_from_utf8())
	var readable_json = json.result[0]
	
	$Joints/j1.text = str(readable_json.j1)
	$Joints/j2.text = str(readable_json.j2)
	$Joints/j3.text = str(readable_json.j3)
	
	$Position/x.text = str(readable_json.x)
	$Position/y.text = str(readable_json.y)
	$Position/z.text = str(readable_json.z)
	$Position/r.text = str(readable_json.r)


func _on_Clear_pressed():
	$Joints/j1.text = ""
	$Joints/j2.text = ""
	$Joints/j3.text = ""
	
	$Position/x.text = ""
	$Position/y.text = ""
	$Position/z.text = ""
	$Position/r.text = ""
