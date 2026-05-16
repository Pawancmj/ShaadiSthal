import { Mail, Sparkles } from 'lucide-react';

export default function DigitalInvitations(): React.ReactElement {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-full shadow-sm">
              <Mail className="h-10 w-10 text-rose-500" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-playfair text-gray-800 mb-4">
            ShaadiSthal
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Design digital wedding invitations that will make your guests fall in love.
          </p>
          <button className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors font-medium inline-flex items-center">
            <Sparkles className="mr-2 h-5 w-5" />
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}