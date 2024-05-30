//<main.js>
//<vars.js>
x = 30
playerPos = Vec2(0,0)
playerSpeed = 300

//</vars.js>
//<fns.js>
function move(dt){
	if(IsKeyDown(KEY_W)){
		playerPos.y -= playerSpeed * dt
	}else if(IsKeyDown(KEY_S)){
		playerPos.y += playerSpeed * dt
	}

	if(IsKeyDown(KEY_A)){
		playerPos.x -= playerSpeed * dt
	}else if(IsKeyDown(KEY_D)){
		playerPos.x += playerSpeed * dt
	}

}

//</fns.js>

function main(){
	InitWindow(800,600,"test")
	while(!WindowShouldClose()){
		BeginDrawing()
		ClearBackground(black)
		dt = GetFrameTime()
		move(dt)
		DrawRectangle(playerPos.x, playerPos.y, 20,20,red)
		EndDrawing()
	}
	CloseWindow()
}

//</main.js>

