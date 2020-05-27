#define _UNIX
#include "dll.hpp"
#undef _UNIX
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

long long EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_get_UnpSize_0(RARHeaderDataEx* self) {
  return  (long long) self->UnpSizeHigh << 32 | self->UnpSize;
}

long long EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_get_PackSize_0(RARHeaderDataEx* self) {
  return (long long) self->PackSizeHigh << 32 | self->PackSize;
}

}
