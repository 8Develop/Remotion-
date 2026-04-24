import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BRAND } from "./theme";
import { SceneTitle } from "./SceneTitle";

export const DASHBOARD_DURATION = 180;

type Product = {
  emoji: string;
  name: string;
  price: number;
  originalPrice?: number;
  stock: number;
  tag: "Promotion" | "Nouveauté" | "Invendu";
  limit?: string;
};

const products: Product[] = [
  {
    emoji: "🎂",
    name: "Gâteau enfant",
    price: 45,
    originalPrice: 60,
    stock: 1,
    tag: "Promotion",
    limit: "24/04 · 10:00",
  },
  {
    emoji: "💐",
    name: "Bouquet fleurs",
    price: 7,
    originalPrice: 10,
    stock: 3,
    tag: "Promotion",
    limit: "24/04 · 12:00",
  },
  {
    emoji: "🍰",
    name: "Gâteau fraise",
    price: 10.5,
    originalPrice: 15,
    stock: 3,
    tag: "Promotion",
    limit: "24/04 · 13:00",
  },
];

const ProductRow: React.FC<{ product: Product; delay: number }> = ({
  product,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 130 },
  });
  const tagColor =
    product.tag === "Promotion"
      ? { bg: "#D4F0E0", fg: BRAND.mintText }
      : product.tag === "Nouveauté"
      ? { bg: "#FFE8D6", fg: BRAND.orangeDeep }
      : { bg: "#FFEDC7", fg: "#C46E0C" };

  return (
    <div
      style={{
        opacity: enter,
        transform: `translateX(${(1 - enter) * 60}px)`,
        display: "flex",
        alignItems: "center",
        gap: 20,
        background: "#FFFFFF",
        border: "2px solid #F4E6D9",
        borderRadius: 22,
        padding: 20,
        boxShadow: "0 8px 18px rgba(26,26,46,0.06)",
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: 18,
          background:
            "linear-gradient(145deg, #FFE0C7 0%, #FFC89B 40%, #FFA36C 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 62,
          boxShadow: "0 6px 14px rgba(242, 107, 42, 0.18)",
        }}
      >
        {product.emoji}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 6,
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: BRAND.navy,
              fontFamily: "Poppins, system-ui, sans-serif",
            }}
          >
            {product.name}
          </div>
          <div
            style={{
              background: tagColor.bg,
              color: tagColor.fg,
              borderRadius: 999,
              padding: "4px 14px",
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "Poppins, system-ui, sans-serif",
            }}
          >
            {product.tag}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 8,
            fontFamily: "Poppins, system-ui, sans-serif",
          }}
        >
          <div
            style={{ fontSize: 28, fontWeight: 800, color: BRAND.orangeDeep }}
          >
            {product.price.toFixed(2)} €
          </div>
          {product.originalPrice ? (
            <div
              style={{
                fontSize: 22,
                color: BRAND.gray,
                textDecoration: "line-through",
                fontWeight: 500,
              }}
            >
              {product.originalPrice.toFixed(2)} €
            </div>
          ) : null}
        </div>
        <div
          style={{
            fontSize: 20,
            color: BRAND.gray,
            marginTop: 4,
            fontFamily: "Poppins, system-ui, sans-serif",
          }}
        >
          Stock : {product.stock} · Limite {product.limit}
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {["↗️", "✏️", "🗑️"].map((icon, i) => (
          <div
            key={i}
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              background: BRAND.cream,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export const DashboardAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerIn = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${BRAND.cream} 0%, #F3DFCF 100%)`,
        padding: 60,
        paddingTop: 100,
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          opacity: headerIn,
          transform: `translateY(${(1 - headerIn) * 30}px)`,
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 26,
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 22,
            background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
            color: "white",
            fontSize: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 24px rgba(242,107,42,0.35)",
          }}
        >
          🏪
        </div>
        <div>
          <div
            style={{ fontSize: 40, fontWeight: 900, color: BRAND.navy }}
          >
            Mon Espace Commerçant
          </div>
          <div style={{ fontSize: 24, color: BRAND.gray, fontWeight: 500 }}>
            Gérez votre boutique
          </div>
        </div>
      </div>

      <div
        style={{
          opacity: headerIn,
          transform: `translateY(${(1 - headerIn) * 20}px)`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 22,
        }}
      >
        <div style={{ fontSize: 42, fontWeight: 900, color: BRAND.navy }}>
          Mes produits
        </div>
        <div
          style={{
            background: `linear-gradient(135deg, ${BRAND.orangeFrom}, ${BRAND.orangeDeep})`,
            color: "white",
            borderRadius: 18,
            padding: "14px 24px",
            fontSize: 26,
            fontWeight: 800,
            boxShadow: "0 10px 24px rgba(242,107,42,0.35)",
          }}
        >
          + Ajouter
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {products.map((p, i) => (
          <ProductRow key={i} product={p} delay={18 + i * 16} />
        ))}
      </div>

      <SceneTitle
        kicker="Étape 3"
        title="Votre tableau de bord"
        subtitle="Tous vos produits, en un coup d'œil"
        position="bottom"
      />
    </AbsoluteFill>
  );
};
