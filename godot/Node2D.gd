extends Node2D

var y_max_value = 22
var y_min_value = 147
var x_max_value = 25
var x_min_value = 260

var hook_start_position = Vector2(156, 153)

func _on_Button_pressed():
	$HTTPRequest.request("http://localhost:3000/lastPosition")

func _on_HTTPRequest_request_completed(result, response_code, headers, body):
	var json = JSON.parse(body.get_string_from_utf8())
	var readable_json = json.result[0]
	print(readable_json)
	
	$Joints/j1.text = str(readable_json.j1)
	$Joints/j2.text = str(readable_json.j2)
	$Joints/j3.text = str(readable_json.j3)
	
	$Position/x.text = str(readable_json.x)
	$Position/y.text = str(readable_json.y)
	$Position/z.text = str(readable_json.z)
	$Position/r.text = str(readable_json.r)
	
	$Simulation/Hook.position = hook_start_position
	$Simulation/Hook.move_local_y(-readable_json.x / 3.2)
	$Simulation/Hook.move_local_x(readable_json.y / 3.2)


func _on_Clear_pressed():
	$Joints/j1.text = ""
	$Joints/j2.text = ""
	$Joints/j3.text = ""
	
	$Position/x.text = ""
	$Position/y.text = ""
	$Position/z.text = ""
	$Position/r.text = ""
	$Simulation/Hook.position = hook_start_position
