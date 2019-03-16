import os
from io import BytesIO
from random import randint,choice
from PIL import Image,ImageFont,ImageDraw

from px.settings import BASE_DIR


class Vericode():
    def __init__(self,width=130,height=38,size=4):
        """
        def getvericode(request):
            vc = Vericode([width],[height],[size])
            img,code = vc.create_img()
            response = HttpResponse(img,'image/png')
            response.set_cookie('vericode',code,path='/')
            return response
        """
        self.width = width
        self.height = height
        self.size = size
        self.pen = None
        self.__code = ""

    def rand_color(self,low,high):
        return randint(low,high),randint(low,high),randint(low,high)

    def rand_string(self):
        ressult = ""
        r = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
        for i in range(self.size):
            ressult += choice(r)
        self.__code = ressult

    def create_img(self):
        im = Image.new("RGB",(self.width,self.height),self.rand_color(200,255))
        self.pen = ImageDraw.Draw(im)
        self.rand_string()
        self.__draw_code()
        self.__draw_line()
        self.__draw_point()

        del self.pen

        buff = BytesIO()
        im.save(buff,'png')
        res = buff.getvalue()
        buff.close()
        return (res,self.__code)

    def __draw_code(self):
        font_path = os.path.join(BASE_DIR,'px/fonts/TektonPro-Bold.otf')
        code_font = ImageFont.truetype(font_path,24,encoding="utf-8")
        for i in range(self.size):
            x = 10 + randint(self.height // 25 * 3,self.height // 15 * 3) + self.width // self.size - self.height // 5 * 3 + i * (self.width - 20) // self.size
            y = randint(self.height // 20, self.height // 5 * 3 - 8)
            self.pen.text((x, y), self.__code[i], fill=self.rand_color(30, 70), font=code_font)

    def __draw_point(self):
        for i in range(int(self.width//5*4)):
            x = randint(1, self.width - 1)
            y = randint(1, self.height - 1)
            self.pen.point((x, y), fill=self.rand_color(50, 150))

    def __draw_line(self):
        for i in range(randint(3, 5)):
            star = (randint(1, self.width - 1), randint(1, self.height - 1))
            end = (randint(1, self.width - 1), randint(1, self.height - 1))
            self.pen.line([star, end], fill=self.rand_color(130, 200))

    @property
    def get_code(self):
        return self.__code