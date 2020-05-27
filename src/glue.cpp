
#include <emscripten.h>

extern "C" {

// Not using size_t for array indices as the values used by the javascript code are signed.
void array_bounds_check(const int array_size, const int array_idx) {
  if (array_idx < 0 || array_idx >= array_size) {
    EM_ASM({
      throw 'Array index ' + $0 + ' out of bounds: [0,' + $1 + ')';
    }, array_idx, array_size);
  }
}

// RARHeaderDataEx

RARHeaderDataEx* EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_RARHeaderDataEx_0() {
  return new RARHeaderDataEx();
}

//char* EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_get_FileNameW_0(RARHeaderDataEx* self) {
//  return self->FileNameW;
//}

//void EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_set_FileNameW_1(RARHeaderDataEx* self, char* arg0) {
//  self->FileNameW = arg0;
//}

//long long EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_get_UnpSize_0(RARHeaderDataEx* self) {
//  return self->UnpSize;
//}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_set_UnpSize_1(RARHeaderDataEx* self, long long arg0) {
  self->UnpSize = arg0;
}

//long long EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_get_PackSize_0(RARHeaderDataEx* self) {
//  return self->PackSize;
//}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_set_PackSize_1(RARHeaderDataEx* self, long long arg0) {
  self->PackSize = arg0;
}

unsigned int EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_get_Flags_0(RARHeaderDataEx* self) {
  return self->Flags;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx_set_Flags_1(RARHeaderDataEx* self, unsigned int arg0) {
  self->Flags = arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RARHeaderDataEx___destroy___0(RARHeaderDataEx* self) {
  delete self;
}

// RAROpenArchiveDataEx

RAROpenArchiveDataEx* EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_RAROpenArchiveDataEx_0() {
  return new RAROpenArchiveDataEx();
}

char* EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_get_ArcName_0(RAROpenArchiveDataEx* self) {
  return self->ArcName;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_set_ArcName_1(RAROpenArchiveDataEx* self, char* arg0) {
  self->ArcName = arg0;
}

unsigned int EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_get_OpenMode_0(RAROpenArchiveDataEx* self) {
  return self->OpenMode;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_set_OpenMode_1(RAROpenArchiveDataEx* self, unsigned int arg0) {
  self->OpenMode = arg0;
}

UNRARCALLBACK EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_get_Callback_0(RAROpenArchiveDataEx* self) {
  return self->Callback;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_set_Callback_1(RAROpenArchiveDataEx* self, UNRARCALLBACK arg0) {
  self->Callback = arg0;
}

unsigned int EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_get_OpenResult_0(RAROpenArchiveDataEx* self) {
  return self->OpenResult;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_set_OpenResult_1(RAROpenArchiveDataEx* self, unsigned int arg0) {
  self->OpenResult = arg0;
}

unsigned int EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_get_Flags_0(RAROpenArchiveDataEx* self) {
  return self->Flags;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx_set_Flags_1(RAROpenArchiveDataEx* self, unsigned int arg0) {
  self->Flags = arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RAROpenArchiveDataEx___destroy___0(RAROpenArchiveDataEx* self) {
  delete self;
}

// VoidPtr

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VoidPtr___destroy___0(void** self) {
  delete self;
}

}

