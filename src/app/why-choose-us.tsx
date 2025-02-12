"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        Hizmetlerimiz
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        Discover the unique advantages, benefits, and standout features that set
        our course apart from the rest.
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <BackgroundCard title="">
          <img src="/image/tamir.jpg" alt="Tamir" className="w-full h-auto rounded-lg" />

            
          </BackgroundCard>
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={CloudIcon} title="Toner & Kartuş Dolumu">
              Lazer ve mürekkep püskürtmeli yazıcılar için kaliteli toner ve kartuş dolum hizmeti sunuyoruz. Ekonomik çözümlerimizle maliyetlerinizi düşürüyoruz.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="Yazıcı Tamiri ve Bakımı">
              Her marka ve model yazıcınız için hızlı ve garantili tamir hizmeti sunuyoruz. Periyodik bakım hizmetimizle yazıcınızın ömrünü uzatıyoruz.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="Sıfır & İkinci El Yazıcı Satışı">
            En iyi markalara ait yazıcıları en uygun fiyatlarla sunuyoruz. İhtiyacınıza en uygun yazıcıyı seçmeniz için uzman ekibimizle yanınızdayız.
            </Option>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={KeyIcon} title="Orijinal & Muadil Toner Satışı">
              Yazıcınızın performansını en iyi şekilde korumak için orijinal ve yüksek kaliteli muadil toner seçenekleri sunuyoruz.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={UsersIcon} title="Teknik Servis & Yerinde Destek">
              Ofisinizde yazıcı arızalarını gidermek için yerinde servis hizmeti sunuyoruz. Hızlı ve etkili çözümlerimizle işlerinizi aksatmadan devam etmenizi sağlıyoruz.
              </Option>
            </div>
            <Option icon={CloudArrowDownIcon} title="Yazıcı Kiralama Hizmeti">
            İşletmeler için uygun maliyetli ve uzun vadeli yazıcı kiralama hizmeti sunuyoruz. Yüksek baskı hacmine uygun profesyonel cihazlarımızla iş yükünüzü hafifletiyoruz.
            </Option>
          </div>
          <BackgroundCard title="">
          <img src="/image/2.png" alt="Tamir" className="w-full h-auto rounded-lg" />

          </BackgroundCard>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
