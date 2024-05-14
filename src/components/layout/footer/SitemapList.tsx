'use client';

import React, {useState, useEffect, useMemo} from 'react';
import {getSiteMapUrls} from "@/services/sitemap.service";

interface UrlTree {
    [key: string]: UrlTree | number;
}

interface NodeComponentProps {
    node: UrlTree | number;
    name: string;
    fullPath: string;
}

const NodeComponent: React.FC<NodeComponentProps> = ({node, name, fullPath}) => {
    const formattedName = name.replace(/-/g, ' ')
        .split(' ')
        .map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase())
        .join(' ');

    if (typeof node === 'number') {
        return <span className="ml-2 text-sm text-gray-500">({node})</span>;
    }

    const entries = Object.entries(node);
    const hasChildren = entries.length > 0;
    const url = `${fullPath}/${name}`;


    return (
        <>
            <div className="font-medium hover:text-gray-700">
                <a href={url} aria-label={`Navigate to ${formattedName}`}>{formattedName}</a>
            </div>
            {hasChildren && (
                <div className="ml-4">
                    {entries.map(([key, value]) => (
                        <div key={key} className="mt-2">
                            <NodeComponent node={value} name={key} fullPath={url}/>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

const SiteMapList: React.FC = () => {
    const [tree, setTree] = useState<UrlTree>({});
    const [error, setError] = useState<string | null>(null);
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    console.log(typeof tree)
    console.log('tree', baseUrl, tree)
    const buildUrlTree = useMemo(() => {
        const addPartsToTree = (current: UrlTree, parts: string[], set = new Set()) => {
            parts.forEach(part => {
                if (!part) return;
                if (!current[part] && !set.has(part)) {
                    current[part] = {};
                    if (parts[0] === 'expertises') {
                        set.add(part);
                    }
                }
                current = current[part] as UrlTree;
            });
        };
        return (urls: string[]): UrlTree => {
            const tree: UrlTree = {};
            urls.forEach(url => {
                const parts = url.replace(baseUrl ?? '', '').split('/');
                if (parts[0] !== 'http:' && parts[0] !== 'posts' && parts[0] !== 'contact') {
                    addPartsToTree(tree, parts, new Set());
                }
            });
            return tree;
        };
    }, [baseUrl]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const sitemapUrls = await getSiteMapUrls();
                setTree(buildUrlTree(sitemapUrls));
            } catch (e) {
                setError('Failed to load sitemap URLs');
            }
        };
        loadData().catch(console.error);
    }, [baseUrl, buildUrlTree]);

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="max-w-screen-xl mx-auto pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(tree).map(([category, items]) => (
                    <div key={category}>
                        <h2 className="text-2xl font-bold">
                            <a href={`${baseUrl}${category}`} aria-label={`Link to ${category}`}>
                                {category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </a>
                        </h2>
                        {typeof items === 'object' && (
                            <div className="mt-2">
                                {Object.entries(items).map(([key, node]) => (
                                    <div key={key} className="mt-4">
                                        <NodeComponent key={key}
                                                       node={node as UrlTree}
                                                       name={key}
                                                       fullPath={`${baseUrl}${category}`}

                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SiteMapList;
