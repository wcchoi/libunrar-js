#include "dll.hpp" 
#include "rar.hpp"
#include "glue.cpp"

extern "C" {
	
char* EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_get_FileNameW_0(RARHeaderDataEx* self) {
  char s[1000]; s[0]=0;
  WideToChar(self->FileNameW,s,1000);
  return s;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_set_FileNameW_1(RARHeaderDataEx* self, char* arg0) {
//  self->FileNameW = arg0;
}



}
