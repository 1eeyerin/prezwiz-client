import { Calendar, ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

type StoreCardProps = {
  id: number;
  topic: string;
  createdAt: string;
};

const StoreCard = ({ id, topic, createdAt }: StoreCardProps) => {
  return (
    <Link href={`/store/${id}`}>
      <Card className="group relative w-full overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all duration-200 hover:shadow-lg">
        <CardHeader className="p-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 rounded-md bg-zinc-50 p-2">
                <FileText className="h-5 w-5 text-zinc-600" />
              </div>
              <CardTitle className="line-clamp-1 flex-1 text-lg font-medium text-zinc-800">{topic}</CardTitle>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <Calendar className="h-4 w-4" />
                <CardDescription>{formatDate(createdAt)}</CardDescription>
              </div>

              <div className="flex items-center gap-1 text-sm font-medium text-zinc-600">
                자세히 보기
                <ChevronRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default StoreCard;
