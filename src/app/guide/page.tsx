'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Home, ShoppingCart, Users, MapPin, Car, Calendar, Info, Sun, Moon, Waves, Mountain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function GuidePage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen max-w-md mx-auto relative pb-16">
      {/* Status Bar */}
      <div className="bg-[#0EA5E9] text-white px-4 py-2 flex justify-between items-center">
        <span>11:21</span>
        <div className="flex items-center gap-2">
          <span>5G</span>
          <div className="w-6 h-3 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Header */}
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/背景2.jpg-W9cxIDdzS95nIxpJY26kf2oJFx1oVr.jpeg"
          alt="西涌全景"
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white">
          <div className="absolute bottom-4 left-4">
            <h1 className="text-2xl font-bold mb-2">今日西涌</h1>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-blue-500/20">
                  <Sun className="w-4 h-4 mr-1" />
                  天气晴朗 夜间适宜观星
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-blue-500/20">
                  <Moon className="w-4 h-4 mr-1" />
                  重点呈象：金星伴月
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Info */}
      <div className="p-4">
        <Card className="bg-gray-700 text-white p-3 rounded-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>深圳天文：11月天象预报</span>
            </div>
            <span className="flex items-center">
              一键跳转阅读
              <Info className="w-4 h-4 ml-1" />
            </span>
          </div>
        </Card>
      </div>

      {/* Quick Access Tabs */}
      <div className="px-4 mb-4">
        <Tabs defaultValue="tickets" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tickets">门票预订</TabsTrigger>
            <TabsTrigger value="routes">推荐路线</TabsTrigger>
            <TabsTrigger value="spots">景点介绍</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Main Content */}
      <div className="p-4 grid grid-cols-2 gap-4">
        <Card className="p-4 relative overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-NbLTxIjk70tub9GVMgIf947uG3gYgy.jpeg"
            alt="景区门票"
            fill
            className="object-cover"
          />
          <div className="relative z-10 text-white">
            <h3 className="font-bold">景区门票</h3>
            <p className="text-sm mt-1">含天文馆</p>
            <Badge className="mt-2" variant="secondary">
              ¥80起
            </Badge>
          </div>
        </Card>
        <Card className="p-4 relative overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-7DfUnvN3wdfrFrdGhYK9uyCe354OLj.jpeg"
            alt="观星活动"
            fill
            className="object-cover"
          />
          <div className="relative z-10 text-white">
            <h3 className="font-bold">观星活动</h3>
            <p className="text-sm mt-1">专业讲解</p>
            <Badge className="mt-2" variant="secondary">
              ¥120起
            </Badge>
          </div>
        </Card>
      </div>

      {/* Featured Spots */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">特色景点</h2>
        <div className="space-y-4">
          <Card className="flex items-center p-3">
            <div className="flex-shrink-0 mr-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/天文台.JPG-UlAWV8CwLOwnzhVIbMashwzixk2dg7.jpeg"
                alt="天文台"
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold">西涌天文台</h3>
              <p className="text-sm text-gray-500">探索浩瀚宇宙</p>
              <div className="flex items-center mt-1">
                <Badge variant="secondary" className="mr-2">
                  <Mountain className="w-3 h-3 mr-1" />
                  必游
                </Badge>
                <Badge variant="secondary">
                  <Waves className="w-3 h-3 mr-1" />
                  海景
                </Badge>
              </div>
            </div>
          </Card>
          <Card className="flex items-center p-3">
            <div className="flex-shrink-0 mr-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/音乐节.jpg-MPJuCWx2Pizrc0MbKLcBZeQts92kC6.jpeg"
                alt="沙滩音乐节"
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold">沙滩音乐节</h3>
              <p className="text-sm text-gray-500">星空下的音乐盛宴</p>
              <div className="flex items-center mt-1">
                <Badge variant="secondary" className="mr-2">
                  <Sun className="w-3 h-3 mr-1" />
                  热门
                </Badge>
                <Badge variant="secondary">
                  <Moon className="w-3 h-3 mr-1" />
                  夜场
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md max-w-md mx-auto">
        <div className="flex justify-around p-2">
          <Link href="/" className="flex flex-col items-center text-gray-500">
            <Home className="w-6 h-6" />
            <span className="text-[10px] mt-1">我的首页</span>
          </Link>
          <Link href="/shop" className="flex flex-col items-center text-gray-500">
            <ShoppingCart className="w-6 h-6" />
            <span className="text-[10px] mt-1">购物商城</span>
          </Link>
          <Link href="/social" className="flex flex-col items-center text-gray-500">
            <Users className="w-6 h-6" />
            <span className="text-[10px] mt-1">社交空间</span>
          </Link>
          <Link href="/guide" className="flex flex-col items-center text-blue-500">
            <MapPin className="w-6 h-6" />
            <span className="text-[10px] mt-1">景点导览</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

