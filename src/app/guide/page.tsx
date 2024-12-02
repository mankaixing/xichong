'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Home, ShoppingCart, Users, MapPin, Calendar, Info, Sun, Moon, Waves, Mountain } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'

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
          <div className="relative z-10 bg-white/90 p-3 rounded-lg">
            <h3 className="font-bold mb-2">景区购票</h3>
            <p className="text-sm text-gray-500">线上购买更优惠</p>
          </div>
        </Card>
        <Card className="p-4 relative overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/地图-nzgY3mGWqGKYqIuIDeeiyKpqO96ZFR.png"
            alt="全景地图"
            fill
            className="object-cover"
          />
          <div className="relative z-10 bg-white/90 p-3 rounded-lg">
            <h3 className="font-bold mb-2">全景地图</h3>
            <p className="text-sm text-gray-500">四大沙滩 八大村落</p>
          </div>
        </Card>
      </div>

      {/* Transportation */}
      <div className="p-4">
        <Card className="p-4 bg-blue-50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="font-bold">交通指引</h3>
              <Badge>实时路况</Badge>
            </div>
            <MapPin className="text-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto py-4 justify-start">
              <div className="text-left">
                <div className="font-medium">前往西涌</div>
                <div className="text-sm text-gray-500">停车场 / 公交线路</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto py-4 justify-start">
              <div className="text-left">
                <div className="font-medium">西涌内部</div>
                <div className="text-sm text-gray-500">景区接驳车指引</div>
              </div>
            </Button>
          </div>
        </Card>
      </div>

      {/* Recommended Routes */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="font-bold">推荐线路</h3>
              <Badge variant="outline" className="text-xs">
                <Mountain className="w-3 h-3 mr-1" />
                景区精选
              </Badge>
            </div>
            <Card className="relative h-32 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/线路.JPG-ujCSs9BHrCI6JnedEFG1vJ115CQvp6.jpeg"
                alt="文化线路"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex items-end">
                <div className="text-white">
                  <div className="font-medium">西涌文化线路</div>
                  <div className="text-sm">旧址遗址、客家文化</div>
                </div>
              </div>
            </Card>
            <Card className="relative h-32 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-NbLTxIjk70tub9GVMgIf947uG3gYgy.jpeg"
                alt="休闲线路"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex items-end">
                <div className="text-white">
                  <div className="font-medium">滨海休闲线路</div>
                  <div className="text-sm">沙滩景区、窑鸡农家乐</div>
                </div>
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="font-bold">景点名片</h3>
              <Badge variant="outline" className="text-xs">
                <Waves className="w-3 h-3 mr-1" />
                必游打卡
              </Badge>
            </div>
            <Card className="relative h-32 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/天文馆-FzBiVzmP34vgo1QEw5Nzf7aGXpCDmQ.png"
                alt="天文馆"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex items-end">
                <div className="text-white">
                  <div className="font-medium">西涌暗夜天文馆</div>
                  <div className="text-sm">深圳首个天文主题馆</div>
                </div>
              </div>
            </Card>
            <Card className="relative h-32 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/天文台.JPG-sE6iUAnfh9yCfFZLp9YgUZYUvUPNxF.jpeg"
                alt="天文台"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex items-end">
                <div className="text-white">
                  <div className="font-medium">四号沙滩</div>
                  <div className="text-sm">深圳天文台</div>
                </div>
              </div>
            </Card>
          </div>
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


